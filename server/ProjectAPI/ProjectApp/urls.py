from django.urls import re_path
from ProjectApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[

    re_path(r'^members$',views.membersApi),
    re_path(r'^members/([0-9]+)$',views.membersApi),

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)