from django.db import models

# Create your models here.


class House(models.Model):
    name = models.CharField(max_length=20)
    square = models.IntegerField()
    description = models.CharField(max_length=200)
    price = models.IntegerField()
    pics = models.CharField(max_length=200)
    modelddd = models.CharField(max_length=20)
