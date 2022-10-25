from django.shortcuts import render
from rest_framework import generics
from .models import Category, Recipes
from .serializers import CategorySerializer, RecipesSerializer, RecipesDetailSerializer

class CategoryAPIVew(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class RecipesAPIVew(generics.ListAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer


class RecipesDetailAPIVew(generics.RetrieveAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesDetailSerializer


class RecipesCategory(generics.ListAPIView):
    model = Recipes
    serializer_class = RecipesSerializer

    def get_queryset(self):
        if getattr(self, 'swagger_fake_view', False):  # какая то не совсем понятная строка
            return Recipes.objects.none()
        category_id = self.kwargs['pk']
        queryset = self.model.objects.filter(category_name=category_id)
        return queryset