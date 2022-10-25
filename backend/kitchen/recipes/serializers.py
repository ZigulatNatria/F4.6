from rest_framework import serializers
from .models import Category, Recipes


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name_category', 'id',)


class RecipesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = ('category_name', 'name', 'discription', 'id')


class RecipesDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = ('name', 'discription')

