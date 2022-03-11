from django.contrib import admin
from .models import Projects

class ProjectsAdmin(admin.ModelAdmin):
    list_display = ('ProjectId','ProjectName','CreatedAt','HasDeadline','DeadlineDate','Completed')

# Register your models here.

admin.site.register(Projects, ProjectsAdmin)