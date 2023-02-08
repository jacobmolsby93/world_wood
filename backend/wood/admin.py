from django.contrib import admin
from .models import Wood

# Register your models here.

@admin.register(Wood)
class WoodAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'location', 'price')
