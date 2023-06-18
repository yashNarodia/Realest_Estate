from django.urls import path,include ,re_path
from .views import SignupView

urlpatterns = [
    path('signup',SignupView.as_view(), name = 'signup'), 
]
