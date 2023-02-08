from django.db import models

# Create your models here.


class Wood(models.Model):
    """
    A model for defining wood typess
    """
    name = models.CharField(max_length=254)
    type = models.CharField(max_length=254)
    description = models.TextField()
    location = models.CharField(max_length=254)
    price = models.IntegerField()
    image = models.ImageField()


    def __str__(self):
        return self.name