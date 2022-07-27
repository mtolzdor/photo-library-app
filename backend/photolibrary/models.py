from django.db import models

# Create your models here.


class Photo(models.Model):
    name = models.CharField(max_length=120, default='New Photo')
    photo = models.ImageField(upload_to='images')


def _str_(self):
    return self.photo
