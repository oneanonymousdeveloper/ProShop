from django.urls import path
from base.views import user_view

urlpatterns =[
    path('login', user_view.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', user_view.getUsers, name='user'),
    path('profile', user_view.getUserprofile, name='users-profile'),
    path('register', user_view.registerUser, name='register'),
]