from rest_framework import serializers

from ..models  import Users
from ..models import DemoContactList

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ("username", 'password')

class DemoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = DemoContactList
        fields =["id","username", "role", "first_Name", "last_Name", "phone"]