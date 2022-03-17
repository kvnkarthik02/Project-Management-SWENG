import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
    taskId: String,
    taskName: String,
    taskDescription: String,
    hasDeadline: Boolean,
    deadline: Date,
    isComplete: Boolean,
    skill: String,
    skillLevel: String,
    allocatedTime: String,
    employeeAssigned: String
});

const ProjectSchema = mongoose.Schema({
    projectId: String,
    projectName: String,
    projectDescription: String,
    hasDeadline: Boolean,
    deadline: Date,
    isComplete: Boolean,
    tasks: [TaskSchema]
});


const MemberSchema = mongoose.Schema({
    memberId : String,
    firstName: String,
    lastName: String,
    projects: [ProjectSchema.projectId],
    hoursAvailable: Number,
    hoursAllocated: Number
    
})

export const Project = mongoose.model('Project',ProjectSchema)
// module.exports = mongoose.module('Projects', ProjectSchema);