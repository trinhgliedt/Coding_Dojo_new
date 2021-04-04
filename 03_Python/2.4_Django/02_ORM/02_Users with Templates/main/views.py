from django.shortcuts import render, redirect
from .models import *

# Create your views here.
def index(request):
    context = {
        "users" : User.objects.all()
    }
    return render(request, "index.html", context)

def process_form(request):
    
    first_name = request.POST["first_name"]
    last_name = request.POST["last_name"]
    email = request.POST["email"]
    age = request.POST["age"]
    user= User(first_name=first_name,last_name=last_name, email=email, age=age )
    user.save()
    return redirect("/")