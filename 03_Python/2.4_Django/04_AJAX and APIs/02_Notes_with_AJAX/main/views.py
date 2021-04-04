from django.shortcuts import render, redirect
from .models import Note

# Create your views here.
def index(request):
    context = {
        "posts":  Note.objects.all(),
        "new_post_form": PostForm(),
    }
    return render(request, 'ajax_posts_app/index.html', context)


def post(request):
    if request.method == "POST":
        bound_form = PostForm(request.POST)
    if bound_form.is_valid():
        Note.objects.create(notes= request.POST["notes"])
    context = {
        "posts":  Note.objects.all(),
    }
    return render(request, 'ajax_posts_app/index.html', context)