from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.response import Response
from rest_framework.decorators import api_view

# this decorator is for allowing a pacific http request
@api_view(['GET'])
def getRoutes(request):
    return Response("hello")

# this decorator is for allowing a pacific http request
@api_view(['GET'])
def getProducts(request):
    return Response(products)

# this decorator is for allowing a pacific http request
@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
    return Response(product)
