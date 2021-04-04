from django.urls import path

from . import views

urlpatterns = [
    # we're "gluing" the routes with their respective functions
    path("", views.index),
    path("process-form", views.process_form),
    path("reset", views.reset_session)
]