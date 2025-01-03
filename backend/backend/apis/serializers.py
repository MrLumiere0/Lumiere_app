from rest_framework import serializers

from ..models  import Users
from ..models import DemoContactList

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = "__all__"

class DemoListSerializer(serializers.ModelSerializer):
    class Meta:
        model = DemoContactList
        fields =  "__all__"