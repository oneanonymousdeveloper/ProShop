from django.urls import path
from base.views import product_view

urlpatterns =[
    path('', product_view.getProducts, name='products'),
    path('<str:pk>', product_view.getProduct, name='product'),
    path('delete/<str:pk>/', product_view.deleteProduct, name="product-delete"),
    path('create/', product_view.createProduct, name="product-create"),
    path('update/<str:pk>/', product_view.updateProduct, name="product-update"),
    path('upload/', product_view.uploadImage, name="image-upload"),
    path('<str:pk>/reviews/', product_view.createProductReview, name="create-review"),
]