from django.shortcuts import render, redirect
from .models import *
import bcrypt
from django.contrib import messages
from django.template.loader import render_to_string
from django.http import JsonResponse
# from datetime import datetime
# from time import strftime, strptime
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.generic import ListView


def index(request):
    context = {
        "all_categories": Category.objects.all(),
    }
    return render(request, '_1_shop_main.html', context)

def display_category(request, cat_id ):
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
    prodCol = {};
    url_parameter = request.GET.get("q")
    if url_parameter:
        all_products = Product.objects.filter(name__icontains=url_parameter, category_id=cat_id)
    else:
        all_products = Product.objects.filter(category_id=cat_id)
    prodCol ["products"] = all_products
    
    if request.is_ajax():
        html = render_to_string(
            template_name="_2_1_product_search_result.html", context={"products": all_products}
        )
        data_dict = {"html_from_view": html}
        return JsonResponse(data=data_dict, safe=False)

    context = {
        "all_categories": Category.objects.all(),
        "this_category": Category.objects.get(id=cat_id),
        "all_products": all_products,
        "products_by_price": products_by_price,
        "all_photos": Photo.objects.all(),
        "paginator": paginator,
        'page_obj': page_obj,
        'prodCol': prodCol,
    }

    return render(request, '_2_shop_category.html', context)


