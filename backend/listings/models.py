from django.db import models
from django.utils.timezone import now
from realtors.models import Realtor
# Create your models here.

class Listing(models.Model):
    class SaleType(models.TextChoices):
        FOR_SALE = 'For Sale'
        FOR_RENT = 'For Rent'

    class HomeType(models.TextChoices):
        HOUSE = 'House'
        CONDO = 'Condo'
        TOWNHOUSE = 'Townhouse'

    realtor = models.ForeignKey(Realtor, on_delete = models.DO_NOTHING)
    slug = models.CharField(max_length=200, unique = True)
    title = models.CharField(max_length=150)
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=15)
    description = models.TextField(blank = True)
    sale_type = models.CharField(max_length= 50, choices = SaleType.choices,default = SaleType.FOR_SALE)
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.DecimalField(max_digits=2, decimal_places=1)
    home_type = models.CharField(max_length=50, choices = HomeType.choices, default = HomeType.HOUSE)
    sqft = models.IntegerField()
    open_house = models.BooleanField(default = False)
    photomain = models.ImageField(upload_to = 'photos/%Y/%m/%d/')
    photo1 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo2 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo3 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo4 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo5 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo6 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo7 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo8 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo9 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    photo10 = models.ImageField(upload_to = 'photos/%Y/%m/%d/', blank=True)
    is_published = models.BooleanField(default = True)
    list_date = models.DateTimeField(default = now, blank = True)

    def __str__(self):
        return self.title