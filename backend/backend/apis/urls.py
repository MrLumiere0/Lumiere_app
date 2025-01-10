from django.urls import path
from . import views
from django.views.generic import TemplateView 





urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")),
    path("register", views.newRegister),
    path("getRegistered", views.getDemoList),
    path("getNews",views.getNews),
    path("searchNews",views.searchNews),
    path('token', views.CustomTokenObtainPairView.as_view()),
    path('token/refresh', views.CustomTokenRefreshView.as_view()),
    path('getUserArticles', views.getArticles),
    path('logout', views.logout),
    path('isauthenticated', views.isAuth),
    path('getUserInfo', views.getUserInfo),
    path('delArticle/<int:id>', views.delArticles),


]

