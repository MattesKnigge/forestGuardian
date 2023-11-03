from django.urls import path
from . import views


urlpatterns = [
    path('locations', views.get_locations, name='locations'),
    path('location/<location_name>', views.get_location, name='location'),
]
