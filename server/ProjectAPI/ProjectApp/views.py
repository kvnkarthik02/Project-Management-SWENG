from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from ProjectApp.models import Projects,Members
from ProjectApp.serializers import ProjectsSerializer,MembersSerializer


# Projects view
@csrf_exempt
def projectsApi(request,id=0):
    if request.method=='GET':
        projects = Projects.objects.all()
        projects_serializer=ProjectsSerializer(projects,many=True)
        return JsonResponse( projects_serializer.data,safe=False)
    elif request.method=='POST':
        project_data=JSONParser().parse(request)
        projects_serializer=ProjectsSerializer(data=project_data)
        if  projects_serializer.is_valid():
            projects_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        project_data=JSONParser().parse(request)
        projects=Projects.objects.get(ProjectsId=project_data['ProjectsId'])
        projects_serializer=ProjectsSerializer(projects,data=project_data)
        if projects_serializer.is_valid():
            projects.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        projects=Projects.objects.get(ProjectId=id)
        projects.delete()
        return JsonResponse("Deleted Successfully",safe=False)


# Members view
@csrf_exempt
def membersApi(request,id=0):
    if request.method=='GET':
        members = Members.objects.all()
        members_serializer=MembersSerializer(members,many=True)
        return JsonResponse( members_serializer.data,safe=False)
    elif request.method=='POST':
        member_data=JSONParser().parse(request)
        members_serializer=MembersSerializer(data=member_data)
        if  members_serializer.is_valid():
            members_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        member_data=JSONParser().parse(request)
        members=Members.objects.get(MemberId=member_data['MemberId'])
        members_serializer=MembersSerializer(members,data=member_data)
        if members_serializer.is_valid():
            members.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        members=Members.objects.get(MemberId=id)
        members.delete()
        return JsonResponse("Deleted Successfully",safe=False)