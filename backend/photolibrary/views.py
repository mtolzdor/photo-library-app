from django.shortcuts import render
from .models import Photo
from .serializers import PhotoSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.

class PhotoView(viewsets.ModelViewSet):
    serializer_class = PhotoSerializer
    queryset = Photo.object.all()

    @action(detail=True, methods=['post'])
    def add_photo(request):
        serializer = PhotoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(request.data, status=status.HTTP_200_OK)
    
    @action(detail=True, method=['delete'])
    def delete_photo(request, pk):
        photo = Photo.object.get(id=pk)
        photo.delete()