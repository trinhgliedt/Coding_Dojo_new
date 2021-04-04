from django.shortcuts import render, HttpResponse

# Create your views here.
def index_func(request):
    # return HttpResponse("<h1>Hello {{first_name}}!<h1>")
    context = {
        "first_name": "Trinh",
        "users": [
            "Max Gliedt",
            "Cassidy Gliedt",
            "Micah Gliedt"
        ]
    }
    return render(request, "index.html", context)
