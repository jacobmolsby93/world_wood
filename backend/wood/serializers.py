from .models import Wood
from rest_framework import serializers


class WoodSerializer(serializers.ModelSerializer):
    image_url = serializers.ImageField(required=False)
    class Meta:
        model = Wood
        fields = '__all__'