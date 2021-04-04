from django.shortcuts import render

# Create your views here.
def addProduct(request):
    if request.method == 'GET':
        return render(request, '_8_admin_add_edit_product.html')

    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            file1 = request.FILES['file1']
            file2 = request.FILES['file2']
            file3 = request.FILES['file3']
            file4 = request.FILES['file4']
            file5 = request.FILES['file5']

            #convert byte code to string 
            file_str1 = file1.read().decode("utf-8")
            file_str2 = file2.read().decode("utf-8")
            file_str3 = file3.read().decode("utf-8")
            file_str4 = file4.read().decode("utf-8")
            file_str5 = file5.read().decode("utf-8")
        return render(request, "_8_admin_add_edit_product.html")