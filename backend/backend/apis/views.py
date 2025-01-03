from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse

import requests
from ..models import Users
from ..models import DemoContactList
from .serializers import UserSerializer
from .serializers import DemoListSerializer


 
@api_view(["GET"])
def getData(request):
    person  = {"name": "Hashid"}
    return Response(person)

@api_view(["GET"])
def getDemoList(request):
      contacts = DemoContactList.objects.all()
      serializedData = DemoListSerializer(contacts, many=True).data
      return Response(serializedData) 


@api_view(["POST"])
def newRegister (request):
            serializer = DemoListSerializer(data = request.data)
            if serializer.is_valid():
                serializer.save()

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def getNews(request):
    #    data = requests.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=4db170d9535f4dccad0bbd35c58dc6b9', verify=False)
     data = requests.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=4db170d9535f4dccad0bbd35c58dc6b9', verify=False)
     return Response(data.json())
       


