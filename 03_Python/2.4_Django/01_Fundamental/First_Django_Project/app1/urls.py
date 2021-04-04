from django.urls import path
from . import views
urlpatterns = [
    path('blogs/', views.index),
    path('', views.root_method1),
    path('second_route/', views.method2),
    path('third_route/', views.method3),
    path('new/', views.new),
    path('create/', views.create),
    path('blogs/<number>/', views.show),
    path('blogs/<number>/edit', views.edit),
    path('blogs/<number>/delete', views.destroy),
    path('blogs/json', views.json),
]