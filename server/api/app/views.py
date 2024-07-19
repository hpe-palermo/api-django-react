from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

color = ['red']

def get_color(request):
    return JsonResponse({'color':color[0]})

@csrf_exempt
def post_color(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            new_color = data.get('color')
            if new_color:
                color[0] = new_color
                return JsonResponse({'message': 'Color added successfully'}, status=200)
            else:
                return JsonResponse({'error': 'No color provided'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
