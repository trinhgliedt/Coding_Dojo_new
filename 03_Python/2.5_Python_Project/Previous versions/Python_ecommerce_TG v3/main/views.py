from django.shortcuts import render, redirect
from .models import *
import bcrypt
from django.contrib import messages
# from django.template.loader import render_to_string
# from django.http import JsonResponse
# from datetime import datetime
# from time import strftime, strptime
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.generic import ListView


def index(request):
    print('request.session["cart_dict"]: ', request.session["cart_dict"])
    if "cart_dict" not in request.session:
        quantity_in_cart = 0
    else:
        quantity_in_cart = 0
        for key in request.session["cart_dict"]:
            quantity_in_cart += request.session["cart_dict"][key]
    context = {
        "all_categories": Category.objects.all(),
        "quantity_in_cart": quantity_in_cart,
    }
    return render(request, '_1_shop_main.html', context)

def display_category(request, cat_id ):
    print('request.session["cart_dict"]: ', request.session["cart_dict"])

    product_list = Product.objects.filter(category_id=cat_id)
    products_by_price = product_list.order_by("unit_price")
    page = request.GET.get('page', 1)
    paginator = Paginator(product_list, 8)
    try:
        all_products = paginator.page(page)
    except PageNotAnInteger:
        all_products = paginator.page(1)
    except EmptyPage:
        all_products = paginator.page(paginator.num_pages)
        
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    
    if "cart_dict" not in request.session:
        quantity_in_cart = 0
    else:
        quantity_in_cart = 0
        for key in request.session["cart_dict"]:
            quantity_in_cart += request.session["cart_dict"][key]

    context = {
        "all_categories": Category.objects.all(),
        "this_category": Category.objects.get(id=cat_id),
        "all_products": all_products,
        "products_by_price": products_by_price,
        "all_photos": Photo.objects.all(),
        "paginator": paginator,
        'page_obj': page_obj,
        "quantity_in_cart": quantity_in_cart,
    }

    return render(request, '_2_shop_category.html', context)

def display_product(request, cat_id, product_id ):
    price_1 = Product.objects.get(id=product_id).unit_price
    price_2 = Product.objects.get(id=product_id).unit_price*2
    price_3 = Product.objects.get(id=product_id).unit_price*3
    if "cart_dict" not in request.session:
        quantity_in_cart = 0
    else:
        quantity_in_cart = 0
        for key in request.session["cart_dict"]:
            quantity_in_cart += request.session["cart_dict"][key]

    context = {
        "this_product": Product.objects.get(id=product_id),
        "this_category": Category.objects.get(id=cat_id),
        "similar_items": Product.objects.filter(category_id=cat_id),
        "price_1": price_1,
        "price_2": price_2,
        "price_3": price_3,
        "product_class": Product,
        "quantity_in_cart": quantity_in_cart,
    }
    print('request.session["cart_dict"]: ', request.session["cart_dict"])
    print("quantity_in_cart: ", quantity_in_cart)
    print("request.POST: ", request.POST)
    return render(request, '_3_shop_prod_info.html', context)

def display_similar_product(request, this_category_id, product_id ):

    context = {
        "cat_id": this_category_id, 
        "product_id": product_id,
    }
    return redirect(f'product/category/<int:cat_id>/item/<int:product_id>')

def add_to_cart(request):
    # request.session.clear()
    print("request.session: ", request.session)
    print("request.POST: ", request.POST)
    print('request.POST["product_id"]: ', request.POST["product_id"])
    if "cart_dict" not in request.session:
        request.session["cart_dict"]={}
        request.session["quantity_in_cart"]=0
    if request.method == "POST":
        request.session["quantity_in_cart"]=0
        product_id = request.POST["product_id"]
        quantity = int(request.POST["quantity"])
        quantity_available = Product.objects.get(id=product_id).quantity_available
        if product_id in request.session["cart_dict"]:
            print("in line 1112")
            if quantity_available - request.session["cart_dict"][product_id] < quantity:
                print("in line 114")
                updated_quan_avail = quantity_available - request.session["cart_dict"][product_id]
                messages.error(request, f"Sorry, we only have {updated_quan_avail} item/s left. Please try to add up to {updated_quan_avail} items to your cart.")
                return redirect(request.META.get('HTTP_REFERER'))

            else: 
                print("in line 120")
                request.session["cart_dict"][product_id] += quantity
                old_quantity = request.session["quantity_in_cart"]
                new_quantity = old_quantity + quantity
                request.session["quantity_in_cart"] = new_quantity
                # if quantity == 1:
                #     messages.info(request, f"{quantity} item has been added to your cart.")
                # else:
                #     messages.info(request, f"{quantity} items have been added to your cart.")
                return redirect(request.META.get('HTTP_REFERER'))
        else:
            print("in line 131")
            if quantity_available < quantity:
                print("in line 130")
                messages.error(request, f"Sorry, we only have {quantity_available} item/s left. Please try to add up to {quantity_available} items to your cart.")
                return redirect('/success')
            else:
                print("in line 137")
                request.session["cart_dict"][product_id] = quantity
                old_quantity = request.session["quantity_in_cart"]
                new_quantity = old_quantity + quantity
                request.session["quantity_in_cart"] = new_quantity
                # if quantity == 1:
                #     messages.info(request, f"{quantity} item has been added to your cart.")
                # else:
                #     messages.info(request, f"{quantity} items have been added to your cart.")
                return redirect('/success')

                
        # for key in request.session["cart_dict"]:
        #     quantity_in_cart += request.session["cart_dict"][key]

    context = {
        # "quantity_in_cart": request.session["quantity_in_cart"],
    }
    
    return redirect('/success')
    
def display_success(request):
    quantity_in_cart = 0
    for key in request.session["cart_dict"]:
        quantity_in_cart += request.session["cart_dict"][key]
    context = {
        "quantity_in_cart": quantity_in_cart,
    }
    return render(request, "_3_z_success.html", context)

