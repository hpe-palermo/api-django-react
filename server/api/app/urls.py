from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('get-color/', get_color),
    path('post-color/', post_color),
]
