from django.urls import path, re_path
from base.views import views

urlpatterns = [
    re_path(r'', views.catchall),
]