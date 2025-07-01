from django.shortcuts import render
from django.http import JsonResponse


def sdr_view(request):
    return render(request, 'sdrAI/home.html')


def sdr_api(request):
    data = {
        'titulo': 'SDR Module',
        'mensagem': 'Bem-vindo à IA de SDR!',
        # 'itens': ['Item 1', 'Item 2', 'Item 3']
    }
    return JsonResponse(data)
