from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse

# Create your views here.
def root_method1(request):
    return HttpResponse("response from root_method1, localhost:8000!")

def method2(request):
    return HttpResponse("response from method2, localhost:8000!")

def method3(request):
    return HttpResponse("response from method3, localhost:8000!")

def index(request):
    return HttpResponse("placeholder to later display a list of all blogs")

def new(request):
    return HttpResponse("placeholder to display a new form to create new blog")

def create(request):
    return HttpResponse("create")

def show(request, number):
    # return render(request, "index.html")
    return HttpResponse(f"placeholder to display blog number: {number}")

def edit(request, number):
    return HttpResponse(f"placeholder to edit blog number: {number}")

def delete(request, number):
    return HttpResponse(f"placeholder to edit blog number: {number}")

def destroy(request, number):
    return redirect("/")

def json(request):
    # return JsonResponse({"response": "JSON response from redirected_method", "status": True})
    return JsonResponse({"title": "My first blog", "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid reiciendis. Aliquid cupiditate eius dolores dolor consequatur.!"})
    

