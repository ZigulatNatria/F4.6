from django.db import models

class Category(models.Model):
    name_category = models.CharField(max_length=20)

    def __str__(self):
        return '{}'.format(self.name_category)



class Recipes(models.Model):
    category_name = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    discription = models.TextField()

    def __str__(self):
        return '{}'.format(self.name)

