# Generated by Django 4.0.6 on 2022-12-08 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_remove_orders_details_amount_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders_details',
            name='patch',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='orders_details',
            name='size',
            field=models.CharField(default='', max_length=50),
        ),
    ]
