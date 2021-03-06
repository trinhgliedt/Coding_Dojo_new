from django.db import models

# Create your models here.
class Show(models.Model):
    tittle = models.CharField(max_length=255)
    network = models.CharField(max_length=60)
    released_date = models.DateTimeField()
    description = models.TextField()

    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
