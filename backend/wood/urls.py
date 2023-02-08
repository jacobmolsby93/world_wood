from django.urls import path
from .views import WoodList

urlpatterns = [
    path('wood/', WoodList.as_view(), name="wood-list")
]
