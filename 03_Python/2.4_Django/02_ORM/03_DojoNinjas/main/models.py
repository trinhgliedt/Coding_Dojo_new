from django.db import models

class Dojo(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=2)
    desc = models.CharField(max_length=255)

class Ninja(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    school = models.ForeignKey(
        Dojo,
        related_name="student",
        on_delete=models.CASCADE
    )