import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
    taskId: String,
    projectId: String,
    taskName: String,
    taskDescription: String,
    hasDeadline: Boolean,
    deadline: Date,
    isComplete: Boolean,
    skill: String,
    skillLevel: String,
    allocatedTime: Number,
    employeeAssigned: String
});


export const Task = mongoose.model('Task',TaskSchema);