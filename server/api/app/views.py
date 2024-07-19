from django.shortcuts import render
from django.http import JsonResponse

def pagehome(request):
    return JsonResponse({'color':'red'})