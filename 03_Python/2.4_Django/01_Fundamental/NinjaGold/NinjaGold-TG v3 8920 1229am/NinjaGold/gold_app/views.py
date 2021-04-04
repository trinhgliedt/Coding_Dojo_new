from django.shortcuts import render, redirect
import random

# index function initiates the gold count, activity log, and renders our html file
def index(request):
    if "gold" not in request.session:
        request.session["gold"] = 0
        request.session["history"] = []
    
    return render(request, "index.html")

# process_gold function calculates how much gold is earned
# Additionally, it determines the color of our activity log
def process_money(request):
    # Each buttons in html are named accordingly.
    # We can find which button was pressed by looking at POST request.
    earned_gold = 0

    if "farm" in request.POST:
        request.session['count'] +=1
        earned_gold = random.randint(10,20)
        request.session["gold"] += earned_gold
        
    elif "cave" in request.POST:
        request.session['count'] +=1
        earned_gold = random.randint(5,10)
        request.session["gold"] += earned_gold
    elif "house" in request.POST:
        request.session['count'] +=1
        earned_gold = random.randint(2,5)
        request.session["gold"] += earned_gold
    # Extra if statements to check if the payout is positive, negative, or 0
    elif "casino" in request.POST:
        request.session['count'] +=1
        earned_gold = random.randint(-50,50)
        request.session["gold"] += earned_gold
    
    request.session["history"].append(earned_gold)

    # to set for the case when the player didn't yet clicked on "confirm winning condition"
    if "player_desired_gold" not in request.session:
        request.session["player_desired_gold"] = 0
    
    if "num_of_move" not in request.session:
        request.session["num_of_move"] = 0
    

    if request.session['count'] == int(request.session["num_of_move"]) and request.session["gold"] >= int(request.session["player_desired_gold"]):
        request.session["win_game"] = "True"
        return redirect("/")
    if request.session['count'] == int(request.session["num_of_move"]) and request.session["gold"] < int(request.session["player_desired_gold"]):
        request.session["win_game"] = "False"
        return redirect("/")
    
    print('request.session["win_game"]: ',request.session["win_game"],", request.session['count']: ",request.session['count'],'; request.session["num_of_move"]: ',request.session["num_of_move"])
    print('request.session["player_desired_gold"]:',request.session["player_desired_gold"],'; request.session["gold"]: ',request.session["gold"])
    
    
    return redirect("/")

def reset(request):
    request.session.clear()

    return redirect("/")


def set_condition(request):
    request.session.clear() # to clear history of desired gold before each new game
    request.session["win_game"] = "Unknown"
    request.session['count'] = 0 # to reset the count before each new game
    request.session["gold"] = 0 # to reset the amount of gold earn before each new game
    request.session["history"] = [] # to reset the history log before each new game


    # if the player clicked on "confirm winning condition" without giving any input
    #then set winning condition = 0; 
    if "player_desired_gold" not in request.POST:
        request.session["player_desired_gold"] = 0
    if "num_of_move" not in request.POST:
        request.session["num_of_move"] = 0
    
    # set winning condition to be what the player set
    request.session["num_of_move"] = request.POST["num_of_move"]
    request.session["player_desired_gold"] = request.POST["desired_gold"]

    print('request.session["win_game"]: ',request.session["win_game"],'; request.session["count"]:',request.session['count'])
    
    return redirect("/")