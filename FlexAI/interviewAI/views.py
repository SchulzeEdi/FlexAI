from django.shortcuts import render
from django.http import HttpResponse

def interview_view(request):
    return HttpResponse("Interview View Placeholder")