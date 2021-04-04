from django.db import models

# Create your models here.
# we are inheriting from the Model class
# borrowing functionality from the parent class
class User(models.Model):
    # these are class variables
    # also known as class attributes (members)

    # creating a new instance of the CharField class
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField(max_length=255)

    # new instances of the IntegerField and TextField classes
    age = models.IntegerField()
    motto = models.TextField()

    # new instances of DateTimeField being created

    # datetime inserted only on creation
    created_at = models.DateTimeField(auto_now_add=True)

    # datetime inserted on creation/updating
    updated_at = models.DateTimeField(auto_now=True)