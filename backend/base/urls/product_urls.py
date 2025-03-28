from django.urls import path
from base.views import product_view

urlpatterns =[
    path('', product_view.getProducts, name='products'),
    path('<str:pk>', product_view.getProduct, name='product')
]