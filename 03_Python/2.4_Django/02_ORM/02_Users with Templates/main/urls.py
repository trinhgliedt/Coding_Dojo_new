from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('process-form', views.process_form)
]