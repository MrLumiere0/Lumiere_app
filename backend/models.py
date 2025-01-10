from django.db import models
from django.contrib.auth.models import User

class Users(models.Model):
    username = models.EmailField()
    password = models.CharField(max_length=20)
    # role = models.CharField(max_length=30)
    # first = models.CharField(max_length=30, default="")
    # last = models.CharField(max_length=30)
    # phone = models.IntegerField()
 
    def __str__(self):
        return self.username

class DemoContactList (models.Model):
    username = models.EmailField(unique=True)
    role = models.CharField(max_length=30, default="")
    first_Name = models.CharField(max_length=30, default="")
    last_Name = models.CharField(max_length=30, default="")
    phone = models.CharField(max_length=20, default="")

    def __str__(self):
        return self.username
    

class Article(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="searches")
    title = models.CharField(max_length=300)
    imgUrl = models.CharField(max_length=1000)
    headlineURL = models.CharField(max_length=1000)

    def __str__(self):
        return self.title