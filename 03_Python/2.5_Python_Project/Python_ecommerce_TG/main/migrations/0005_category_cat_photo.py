# Generated by Django 2.2.4 on 2020-08-26 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20200826_1045'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='cat_photo',
            field=models.ImageField(blank=True, upload_to='categories'),
        ),
    ]