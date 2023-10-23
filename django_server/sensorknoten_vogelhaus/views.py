import datetime
import random

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def get_location(request, location_name: str):
    data = {
        'temperature': {
            'timestamp': datetime.datetime.now().strftime("%d.%m%Y %H:%M:%S"),
            'value': random.randint(-25, 42)
        },
        'humidity': {
            'timestamp': datetime.datetime.now().strftime("%d.%m%Y %H:%M:%S"),
            'value': random.randint(0, 100)
        },
        'pressure': {
            'timestamp': datetime.datetime.now().strftime("%d.%m%Y %H:%M:%S"),
            'value': random.randint(800, 1100)
        },
    }

    return Response(data)

