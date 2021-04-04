from django.shortcuts import render, redirect

def index(request):
    if "favorite_color" not in request.session:
        request.session["favorite_color"] = "white"

    print(request.session["favorite_color"])
    context = {
        "color": request.session["favorite_color"]
    }
    return render(request, "index.html", context)

def process_form(request):
    # print(request.POST)
    # session is just like a dictionary
    request.session["favorite_color"] = request.POST["fav_color"]
    return redirect("/")