from django.http import HttpResponse


# Create your views here.
def login(request):
    if request.method == 'POST':
        print('fasfsafa')
        return HttpResponse('hello')
    if request.method == 'GET':
        return HttpResponse('不允许 GET')
