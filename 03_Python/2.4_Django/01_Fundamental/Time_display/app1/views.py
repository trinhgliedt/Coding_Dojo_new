from django.shortcuts import render, HttpResponse
from time import gmtime, strftime
from django.utils import timezone

now = timezone.now()

def index(request):
    context = {
        # "time": strftime("%Y-%m-%d %H:%M %p", gmtime()),
        "date": strftime("%b %d, %Y", gmtime()),
        "time": strftime("%I:%M %p", gmtime())
    }
    return render(request, 'index.html', context)



# Create your views here.
