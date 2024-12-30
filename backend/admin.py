from django.contrib import admin
from .models import Users
from .models import DemoContactList

admin.site.register(Users)
admin.site.register(DemoContactList)