# Backend

To run the node server
 
- `cd server`

- `npm install`

- `npm start`

# JSON format

## Project 
```json
{
    "projectId": "123",
    "projectName": "Fix",
    "projectDescription": "Fix backend",
    "tasks": [
      {
        "taskId": 456,
        "taskName": "api CRUD",
        "taskDescription": "node api build",
        "requiredSkill": "Node",
        "requiredSkillLevel": "Intermediate",
        "allocatedTime": 2.5,
        "hasDeadline": false,
        "deadline": null,
        "employeeIdAssigned": 101,
        "is completed": true
      },
      {
        "taskId": 789,
        "taskName": "api connect",
        "taskDescription": "node api connect",
        "requiredSkill": "React",
        "requiredSkillLevel": "Beginner",
        "allocatedTime": 1.0,
        "hasDeadline": true,
        "deadline": "2022-10-10T13:45:00.000Z",
        "employeeIdAssigned": null,
        "is completed": false
      }
      ],
      "hasDeadline": true,
      "deadline": "2022-12-10T13:45:00.000Z",
      "is completed": false
  }
```

## Member
```json
{
    "memberId": 123,
    "firstName": "Bob",
    "lastName": "Baxter",
    "projects":[123,456,789],
    "hoursAvailable": 40.0,
    "hoursAllocated": 0.0
}
 ```
