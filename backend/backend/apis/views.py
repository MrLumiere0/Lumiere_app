from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
import json
import requests
from ..models import DemoContactList
from ..models import Article
from .serializers import UserSerializer
from .serializers import DemoListSerializer
from .serializers import ArticleSerializer
from django.contrib.auth import get_user_model


User = get_user_model()

# Sets cookies upon successful login
class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        try:
            response = super().post(request, *args, **kwargs)
            tokens = response.data

            access_token = tokens['access']
            refresh_token = tokens['refresh']

            res = Response()

            res.data = {'success':True}

            res.set_cookie(
                key='access_token',
                value=access_token,
                samesite='None',
                secure=True,
                path='/'
            )

            res.set_cookie(
                key='refresh_token',
                value=refresh_token,
                samesite='None',
                secure=True,
                path='/'
            )
            # send response with cookies
            res.data.update(tokens)
            return res
        
        except:
            return Response({'success':False})
 
class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.COOKIES.get('refresh_token')

            request.data['refresh'] = refresh_token

            response = super().post(request, *args, **kwargs)
            
            tokens = response.data
            access_token = tokens['access']

            res = Response()

            res.data = {'refreshed': True}

            res.set_cookie(
                key='acsess_token',
                value=access_token,
                httponly=True,
                secure=True,
                samesite=None,
                path='/'
            )
            return res

        except:
            return Response({'refreshed': False})
        
# send back logged in user info
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserInfo(request):
    user = request.user
    user_info = {
        'id': user.id,
        'username': user.username,
        'first_Name': user.first_name,
        'last_Name': user.last_name,
    }
    return Response(user_info, status=status.HTTP_200_OK)


# logout         
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):

    try:
        res = Response()
        res.data = {'success':True}
        res.delete_cookie('access_token', path='/', samesite='None')
        res.delete_cookie('response_token', path='/', samesite='None')
        return res

    except:
        return Response({'success':False})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def isAuth(request):
    try: 
         return Response({"authenticated": True})
        

    except:
        return Response({"authenticated": False})

        

# Can retireve articles
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getArticles(request):
    user = request.user
    article = Article.objects.filter(owner = user)
    serializedArticles = ArticleSerializer(article, many=True)
    return Response(serializedArticles.data)

# Can delete user's article
@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delArticles(request, id):
    try:
        user = request.user
        # body_data = request.body.decode()
        # body = json.loads(body_data)
        # id = body['headline']
        # articleId = id
        article = Article.objects.filter(owner = user, id=id) 
        article.delete()
        articles = Article.objects.filter(owner = user)
        serRefArticles = ArticleSerializer(articles, many=True)
        return Response(serRefArticles.data)
    
    except:
        return Response({"Could not delete Article"})
    
   



# Can create new entry for users who registered
@api_view(["POST"])
@permission_classes([AllowAny])
def newRegister (request):
            serializer = DemoListSerializer(data = request.data)
            if serializer.is_valid():
                serializer.save()

                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Get static news category
@api_view(["POST"])
@permission_classes([AllowAny])
def getNews(request):
    body_data = request.body.decode()
    body = json.loads(body_data)
    category = body['category']
    link = f"https://newsapi.org/v2/top-headlines?country=us&category={category}&apiKey=4db170d9535f4dccad0bbd35c58dc6b9"
    returnData = requests.get(link, verify=None).json()
    return Response(returnData['articles'])
    return Response(category)




# Get custom news data
@api_view(["POST"])
@permission_classes([AllowAny])
def searchNews(request):
    body_unicode = request.body.decode()
    body = json.loads(body_unicode)
    keyword = body['keyword']
    # category = body['category']
    #  link = f"https://newsapi.org/v2/top-headlines?country=us&category={category}&q={keyword}&apiKey=4db170d9535f4dccad0bbd35c58dc6b9"
    link = f"https://newsapi.org/v2/everything?q={keyword}&language=en&sortBy=relevancy&apiKey=4db170d9535f4dccad0bbd35c58dc6b9"
    returnData = requests.get(link, verify=False).json()
    return Response(returnData['articles'])




# Return Demo List Contacts
@api_view(["GET"])
@permission_classes([AllowAny])
def getDemoList(request):
      contacts = DemoContactList.objects.all()
      serializedData = DemoListSerializer(contacts, many=True).data
      return Response(serializedData) 









       


