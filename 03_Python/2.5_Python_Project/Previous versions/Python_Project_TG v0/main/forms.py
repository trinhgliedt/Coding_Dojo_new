from django import forms

class AdminForm(forms.Form):
	email = forms.EmailField()
	password = forms.CharField(max_length=100, widget=forms.PasswordInput)


class UploadFileForm(forms.Form):
    file1 = forms.FileField()
    file2 = forms.FileField()
    file3 = forms.FileField()
    file4 = forms.FileField()
    file5 = forms.FileField()