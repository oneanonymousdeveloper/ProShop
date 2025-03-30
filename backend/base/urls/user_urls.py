from django.urls import path
from base.views import user_view

urlpatterns =[
    path('login/', user_view.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', user_view.getUsers, name='user'),
    path('profile/', user_view.getUserprofile, name='users-profile'),
    path('profile/update', user_view.updateUserProfile, name='users-profile-update'),
    path('register/', user_view.registerUser, name='register'),
    path('delete/<str:pk>/', user_view.deleteUser, name='user-delete'),
    path('<str:pk>/', user_view.getUserById, name='user'),
    path('update/<str:pk>/', user_view.updateUser, name='user-update'),
]