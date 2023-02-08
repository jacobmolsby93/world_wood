# Generated by Django 4.1.6 on 2023-02-08 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Wood',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=254)),
                ('type', models.CharField(max_length=254)),
                ('description', models.TextField()),
                ('location', models.CharField(max_length=254)),
                ('price', models.IntegerField()),
                ('image', models.ImageField(upload_to='')),
            ],
        ),
    ]