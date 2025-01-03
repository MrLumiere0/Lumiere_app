from rest_framework.response import Response
from django.http import JsonResponse

import requests
from rest_framework.decorators import api_view
from rest_framework import status
from ..models import Users
from ..models import DemoContactList
from .serializers import UserSerializer
from .serializers import DemoListSerializer
from newsapi import NewsApiClient
import certifi 


 
@api_view(["GET"])
def getData(request):
    person  = {"name": "Hashid"}
    return Response(person)

@api_view(["GET"])
def getDemoList(request):
      data = DemoContactList.objects.all()
      return JsonResponse({"List:", dict(data)}, safe=False) 


@api_view(["POST"])
def newRegister (request):
            serializer = DemoListSerializer(data = request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(["GET"])
def getNews(request):
    #    data = requests.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4db170d9535f4dccad0bbd35c58dc6b9', verify=False)
     data = requests.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=4db170d9535f4dccad0bbd35c58dc6b9', verify=False)
     return Response(data.json())
       


