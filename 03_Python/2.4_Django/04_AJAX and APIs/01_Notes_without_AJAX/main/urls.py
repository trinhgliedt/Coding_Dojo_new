from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    # path('note/new', views.add_note_input),
    path('note/update', views.update_note),
]