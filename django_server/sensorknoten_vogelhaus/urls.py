from django.urls import path
from . import views


urlpatterns = [
    path('<location_name>/', views.get_location, name='location'),
]
