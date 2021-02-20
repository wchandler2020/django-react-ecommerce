from django.urls import path
from base.views import getRoutes, getProducts, getProduct

urlpatterns = [
    path('', getRoutes, name='routes'),
    path('products/', getProducts, name='products'),
    path('products/<str:pk>', getProduct, name="product"),
]
