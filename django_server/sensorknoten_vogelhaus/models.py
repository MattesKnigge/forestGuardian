import uuid
from django.db import models
from django.utils import timezone


# Um die Measured Parameters zur Location zu bekommen einfach Location.MeasuredParameter_set.all()
class Location(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=256, unique=True)


class Sensor(models.Model):
    name = models.CharField(max_length=256, unique=True)
    description = models.CharField(max_length=1024, unique=False)


class Parameter(models.Model):
    name = models.CharField(max_length=256)
    description = models.CharField(max_length=1024, unique=False)
    min = models.FloatField(blank=False)
    max = models.FloatField(blank=False)
    lower_good_bound = models.FloatField(blank=False)
    upper_good_bound = models.FloatField(blank=False)


class MeasuredParameter(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='loc_mp')
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    parameter = models.ForeignKey(Parameter, on_delete=models.CASCADE)


class SensorValue(models.Model):
    created_at = models.DateTimeField(default=timezone.now)
    value = models.FloatField(blank=False)
    measuredParameter = models.ForeignKey(MeasuredParameter, on_delete=models.CASCADE)


