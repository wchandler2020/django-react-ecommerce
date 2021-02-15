from django.urls import path
from .views import getRoutes, getProducts, getProduct

urlpatterns = [
    ## @route    GET /
    ## @desc     populates home page with all products
    ## @access   Public
    path('', getRoutes, name='routes'),
    ## @route    GET /products
    ## @desc     populates product page with all products
    ## @access   Public
    path('products/', getProducts, name='products'),
    ## @route    GET /products/:id
    ## @desc     gets a single product information page
    ## @access   Public
    path('products/<str:pk>', getProduct, name="product"),
]
