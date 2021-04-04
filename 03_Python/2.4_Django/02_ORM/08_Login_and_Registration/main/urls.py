from django.urls import path

from . import views

urlpatterns = [
    path('', views.index), #GET
    path('create-user', views.create_user), #POST, or GET
    path('success', views.display_user), #GET
    path('logout', views.logout), #GET
    path('login', views.login), #GET
]