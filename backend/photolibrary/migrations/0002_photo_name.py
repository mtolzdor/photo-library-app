# Generated by Django 4.0.6 on 2022-07-26 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('photolibrary', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='name',
            field=models.CharField(default='New Photo', max_length=120),
        ),
    ]
