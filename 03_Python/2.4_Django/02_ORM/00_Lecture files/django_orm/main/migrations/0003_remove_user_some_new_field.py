# Generated by Django 2.2.4 on 2020-08-10 22:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_user_some_new_field'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='some_new_field',
        ),
    ]