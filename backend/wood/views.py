from rest_framework import generics, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .serializers import WoodSerializer
from .models import Wood

# Create your views here.


# List View
class WoodList(generics.ListAPIView):
    queryset = Wood.objects.all()
    serializer_class = WoodSerializer


