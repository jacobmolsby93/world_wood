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

# Post View
class WoodCreate(generics.CreateAPIView):
    parser_class = (MultiPartParser, FormParser)

    def get(self):
        woods = Wood.objects.all()
        serializer = WoodSerializer(woods, many=True)
        return Response(serializer.data)

    def post(self, request):
        woods_serializer = WoodSerializer(data=request.data)
        if woods_serializer.is_valid():
            woods_serializer.save()
            return Response(woods_serializer.data, status=status.HTTP_201_CREATED)
        else: 
            print('errors', woods_serializer.errors)
            return Response(woods_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Delete View
class WoodDelete(generics.DestroyAPIView):
    queryset = Wood.objects.all()
    serializer_class = WoodSerializer
    lookup_field = 'id'
