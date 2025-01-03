from django.urls import path
from . import views
from django.views.generic import TemplateView 


urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")),
    path('test', views.getData),
    path("register", views.newRegister),
    path("getRegistered", views.getDemoList),
    path("getNews",views.getNews),

]