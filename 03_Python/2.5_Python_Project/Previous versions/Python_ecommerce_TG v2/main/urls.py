from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('product/category/<int:cat_id>', views.display_category),
    path('product/category/<int:cat_id>/item/<int:product_id>', views.display_product),
    path('add_to_cart', views.add_to_cart),
    
    
]