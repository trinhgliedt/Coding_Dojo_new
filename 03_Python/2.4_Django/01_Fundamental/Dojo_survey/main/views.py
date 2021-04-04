from django.shortcuts import render, HttpResponse

def index(request):
    context = {
        "your_name": "",
        "dojo_location": "",
        "fav_language": "",
        "comment": ""
    }
    return render(request, "index.html")
    # return render(request, "index.html", context)

def result(request):
    request.session["your_name"] = request.POST["name"]
    request.session["dojo_location"] = request.POST["dojo_location"]
    request.session["fav_language"] = request.POST["fav-language"]
    request.session["comment"] = request.POST["comment"]
    print('Name from POST: ',request.POST["name"], 'Location from POST: ',request.POST["dojo_location"],'Fav Lang from POST: ' , request.POST["fav-language"],'Comment from POST: ' ,request.POST["comment"])
    return render(request, "result.html")
