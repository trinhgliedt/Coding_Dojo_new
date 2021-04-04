from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    # setting some defaults
    # for new users who are visiting for the first time
    if "fav_color" not in request.session:
        request.session["fav_color"] = "white"
        request.session["history"] = []

    # just for debugging
    # request.session is a special object which acts like a dictionary
    print(request.session)
    print("saved color", request.session['fav_color'])

    context = {
        "colors": [
            "green",
            "blue",
            "orange",
            "gold",
            "yellow",
            "purple"
        ]
    }

    return render(request, "index.html", context)

# in JS function processForm(request) {
# merely defining a function, to be used later
def process_form(request):
    # print(request.POST['color'])

    # creating a variable to hold the color
    color = request.POST["color"]

    # request.session acts like a dictionary
    # overwrite the value of fav_color if already there
    request.session['fav_color'] = color
    request.session["history"].append(color)

    # sending the user back to the index page
    return redirect("/")

def reset_session(request):
    request.session.clear()

    return redirect("/")