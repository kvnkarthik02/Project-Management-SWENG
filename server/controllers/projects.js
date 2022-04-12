import { v4 as uuidv4 } from 'uuid';
import { Project } from '../models/Project.js';

// gets all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects)
    } catch (error) {
        res.json({ message: error });
    }
}

// get project by id
export const getProject = async (req, res) => {
    try {
        const { id } = req.params;
        const projects = await Project.find();
        const foundProject = projects.find((project) => project.projectId === id);
        res.send(foundProject);
    } catch (error) {
        res.json({ message: error });
    }
}

// creates a new project
export const createProject = async (req, res) => {
    const project = new Project({
        projectId: uuidv4(),
        projectName: req.body.projectName,
        projectDescription: req.body.projectDescription,
        hasDeadline: req.body.hasDeadline,
        deadline: req.body.deadline,
        isComplete: req.body.isComplete,
        tasks: req.body.tasks
    });
    try {
        const savedProject = await project.save();
        res.json(savedProject);
    } catch (error) {
        res.json({ message: error });
    }
}

// delete project by id
export const deleteProject = async (req, res) => {
    try {
        const removedProject = await Project.deleteOne({ projectId: req.params.id });
        res.json(removedProject);
    } catch (error) {
        res.json({ message: error });
    }
}

// partial modification of project by id
export const changeProject = async (req, res) => {
    const projectName = req.body.projectName;
    const projectDescription = req.body.projectDescription;
    const hasDeadline = req.body.hasDeadline;
    const deadline = req.body.deadline;
    const isComplete = req.body.isComplete;
    const tasks = req.body.tasks;

    try {
        if (projectName) {
            try {
                const updatedProject = await Project.updateOne(
                    { projectId: req.body.projectId },
                    { $set: { projectName: req.body.projectName } }
                );
                res.json(updatedProject);
            } catch (error) {
                res.json(error);
            }
        }
        if (projectDescription) {
            try {
                const updatedProject = await Project.updateOne(
                    { projectId: req.body.projectId },
                    { $set: { projectDescription: req.body.projectDescription } }
                );
                res.json(updatedProject);
            } catch (error) {
                res.json(error);
            }
        }
        if (hasDeadline) {
            try {
                const updatedProject = await Project.updateOne(
                    { projectId: req.body.projectId },
                    { $set: { hasDeadline: req.body.hasDeadline } }
                );
                res.json(updatedProject);
            } catch (error) {
                res.json(error);
            }
        }
        if (deadline) {
            try {
                const updatedProject = await Project.updateOne(
                    { projectId: req.body.projectId },
                    { $set: { deadline: req.body.deadline } }
                );
                res.json(updatedProject);
            } catch (error) {
                res.json(error);
            }
        }
        if (isComplete) {
            try {
                const updatedProject = await Project.updateOne(
                    { projectId: req.body.projectId },
                    { $set: { isComplete: req.body.isComplete } }
                );
                res.json(updatedProject);
            } catch (error) {
                res.json(error);
            }
        }
        if (tasks) {
            try {
                const updatedProject = await Project.updateOne(
                    { projectId: req.body.projectId },
                    { $set: { tasks: req.body.tasks } }
                );
                res.json(updatedProject);
            } catch (error) {
                res.json(error);
            }
        }

    } catch (error) {
        res.json({ message: error });
    }

}