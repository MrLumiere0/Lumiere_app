from rest_framework import serializers
from django.contrib.auth.models import User



from ..models import DemoContactList
from ..models import Article

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =['username']

class DemoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = DemoContactList
        fields =  "__all__"


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields =  "__all__"