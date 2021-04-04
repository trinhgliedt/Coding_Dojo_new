from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    # handle render for the given category id
    path('product/category/<int:cat_id>', views.display_category),
    # handle AJAX requests 
    path('api/product', views.handle_ajax),
    
]