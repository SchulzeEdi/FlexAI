from django.urls import path
from . import views

urlpatterns = [
    path("", views.sdr_view),
    path("api/", views.sdr_api),
]