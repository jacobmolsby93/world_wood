from django.urls import path
from .views import WoodList, WoodCreate, WoodDelete, WoodUpdate

urlpatterns = [
    path('wood/', WoodList.as_view(), name="wood-list"),
    path('wood/create/', WoodCreate.as_view(), name="wood-create"),
    path('wood/<int:id>/delete/', WoodDelete.as_view(), name="wood-delete"),
        path('wood/<int:id>/update/', WoodUpdate.as_view(), name="wood-update")
]
