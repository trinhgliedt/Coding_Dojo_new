from django.shortcuts import render, redirect

def index(request):
    
    if "count" not in request.session:
        request.session["count"] = 0

    request.session["count"] += 1
    return render(request, "index.html")


def destroy_session(request):
    request.session.clear()
    return redirect("/")

def plus_two(request):
    
    if "count" not in request.session:
        request.session["count"] = 0

    request.session["count"] += 2
    return render(request, "index.html")