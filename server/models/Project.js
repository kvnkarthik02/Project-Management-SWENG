import mongoose from 'mongoose';

const ProjectSchema = mongoose.Schema({
    projectId: String,
    projectName: String,
    projectDescription: String,
    hasDeadline: Boolean,
    deadline: Date,
    isComplete: Boolean
});


export const Project = mongoose.model('Project',ProjectSchema);
// module.exports = mongoose.module('Projects', ProjectSchema);