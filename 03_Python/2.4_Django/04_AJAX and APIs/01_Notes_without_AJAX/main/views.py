from django.shortcuts import render, redirect
from .models import Note

# Create your views here.
def index(request):
    context = {
        "all_notes":  Note.objects.all(),
    }
    return render(request, 'index.html', context)

# def add_note_input(request):
    
#     return redirect('/note/update')

def update_note(request):
    Note.objects.create(notes= request.POST["notes"])
    return redirect('/')