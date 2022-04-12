import mongoose from 'mongoose';

const ProjectSchema = mongoose.Schema({
    projectId: String,
    projectName: String,
    projectDescription: String,
    hasDeadline: Boolean,
    deadline: String,
    isComplete: Boolean,
    team: [String],
    tasks: [String],
});


export const Project = mongoose.model('Project', ProjectSchema);