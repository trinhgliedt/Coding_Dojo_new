from django.shortcuts import render, redirect
from .models import *
import bcrypt
from django.contrib import messages

# Create your views here.
def index(request):

    return render(request, 'login_reg.html')


def create_user(request):
# if request method is GET then redirect to log in page

# if request method is POST then check errors. If no errors, move on to create user
    if request.method == "POST":
        print("request.POST:",request.POST)
        # to check errors before creating users. Display message amd redirect to log in page if there's errors:
        errors = User.objects.basic_validator(request.POST)

        if len(errors) > 0:
            print("errors: ",errors)
            for key, val in errors.items():
                messages.error(request, val)
            return redirect("/")

        # user will be created if there's no validation errors:
        print("----------Start creating user")

        hashed_pw = bcrypt.hashpw(request.POST["password"].encode(), bcrypt.gensalt()).decode()
        created_user = User.objects.create(first_name = request.POST["first_name"], last_name = request.POST["last_name"], email = request.POST["email"], password = hashed_pw)
        
        request.session["user_id"] = created_user.id

        return redirect("/success")
    
    # if request method is GET then redirect to log in page
    return redirect("/")


def display_user(request):
    # to redirect to log in page when user types the direct path: /success
    if "user_id" not in request.session:
        messages.error(request, "You need to log in to see that page.")
        return redirect("/")
    context = {
        "current_user": User.objects.get(id=request.session["user_id"]),
    }
    return render(request, 'success.html', context)


def logout(request):
    request.session.clear()
    return redirect("/")


def login(request):
    if request.method == "POST":
        #try to find the user in the DB
        potential_users = User.objects.filter(email = request.POST["email"])

        if len(potential_users) ==0:
            messages.error(request, "Please check your email and password.")
            return redirect('/')
        
        #if we're here, meaning the email was found.
        #compate the provided pw with the hashed on in the DB
        if bcrypt.checkpw(
            request.POST["password"].encode(),
            potential_users[0].password.encode()):
            request.session["user_id"] = potential_users[0].id
            return redirect("/success")
        
        #if we're here, the password was incorrect
        messages.error(request, "Please check your email and password.")
    return redirect("/")