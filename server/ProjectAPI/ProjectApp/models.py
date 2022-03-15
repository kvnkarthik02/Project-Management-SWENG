from django.db import models

# Create your models here.

class Projects(models.Model):
    ProjectId = models.AutoField(primary_key=True)
    ProjectName = models.CharField(max_length=500)
    CreatedAt = models.DateField()
    HasDeadline = models.BooleanField()
    DeadlineDate = models.DateField()
    Completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title


class Members(models.Model):
    MemberId = models.AutoField(primary_key=True)
    MemberName = models.CharField(max_length=500)

    def _str_(self):
        return self.title