import datetime
import random

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Location, MeasuredParameter, SensorValue


@api_view(['GET'])
def get_locations(request):
    data = [loc.name for loc in Location.objects.all()]
    data.append('random')
    return Response(data)


@api_view(['GET'])
def get_location(request, location_name: str):
    if location_name == "random":
        data = {
            'temperature': {
                'timestamp': datetime.datetime.now().strftime("%d.%m.%Y %H:%M:%S"),
                'value': random.randint(-25, 42),
                'min': -25,
                'max': 42,
            },
            'humidity': {
                'timestamp': datetime.datetime.now().strftime("%d.%m.%Y %H:%M:%S"),
                'value': random.randint(0, 100),
                'min': 0,
                'max': 100,
            },
            'pressure': {
                'timestamp': datetime.datetime.now().strftime("%d.%m.%Y %H:%M:%S"),
                'value': random.randint(800, 1100),
                'min': 800,
                'max': 1100,
            },
            'air_quality': {
                'timestamp': datetime.datetime.now().strftime("%d.%m.%Y %H:%M:%S"),
                'value': random.randint(400, 60000),
                'min': 400,
                'max': 60000,
            }
        }
    else:
        data = {}
        measured_params = MeasuredParameter.objects.filter(location=Location.objects.get(name=location_name)).prefetch_related('parameter').all()
        for mp in measured_params:
            sv = SensorValue.objects.filter(measuredParameter=mp).latest('created_at')
            data[mp.parameter.name] = {
                'timestamp': sv.created_at,
                'value': sv.value,
                'min': mp.parameter.min,
                'max': mp.parameter.max,
            }

    return Response(data)


@api_view(['GET'])
def get_measured_parameter_details(request, measured_parameter_id: str):
    measured_parameter = MeasuredParameter.objects.select_related().get(id=measured_parameter_id)
    return Response(measured_parameter)

