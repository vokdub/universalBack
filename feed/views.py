import re

from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render
from .models import House
from django.http import JsonResponse
import json


# Create your views here.


def index(request):
    return render(request, "index.html")
def productions(request):


    return render(request, "productions.html")


def catalog(request):
    searchQuery = request.GET.get('search', '')
    if searchQuery:
        houses = House.objects.filter(name__icontains=searchQuery)
    else:
        houses = House.objects.all()[:3]
    return render(request, "catalog.html", {"houses": houses, "aside": True})


def api(request):
    count = request.GET.get("count")
    count = int(count)
    houses = House.objects.values()[count:count+3]
    return JsonResponse({"houses": list(houses)})


def description(request):
    houseName = re.split('/', request.path)
    house = House.objects.filter(name=houseName[-1])
    # return HttpResponse(house.name)
    return render(request, "description.html", {"houses": house})

