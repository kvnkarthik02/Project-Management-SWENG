from dataclasses import field
from rest_framework import serializers
from ProjectApp.models import Projects,Members

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Projects
        fields=('ProjectId','ProjectName','CreatedAt','HasDeadline','DeadlineDate','Completed')

# class Tasks(serializers.TasksSerializer):
#     class Meta:
#         model=Tasks
#         fields=('TaskId','TaskName','SkillsRequired','CreatedAt','HasDeadline','DeadlineDate','Completed')

class MembersSerializer(serializers.ModelSerializer):
    class Meta:
        model=Members
        fields=('MemberId','MemberName')