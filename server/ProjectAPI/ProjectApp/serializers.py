from rest_framework import serializers
from ProjectApp.models import Projects,Members

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Projects
        fields=('ProjectId','ProjectName','CreatedAt','HasDeadline','DeaddlineDate')

class MembersSerializer(serializers.ModelSerializer):
    class Meta:
        model=Members
        fields=('MemberId','MemberName')