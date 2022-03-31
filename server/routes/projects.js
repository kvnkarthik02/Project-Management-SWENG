import express from 'express';
import { 
    getAllProjects, 
    createProject, 
    getProject, 
    changeProject, 
    deleteProject 
} from '../controllers/projects.js';

import {
    getAllTasks,
    createTask,
    changeTask
} from '../controllers/tasks.js';

const router = express.Router();

// get all projects
router.get('/', getAllProjects);

// get project by id
router.get('/:id', getProject);

//add new project
router.post('/', createProject);

// delete by id
router.delete('/:id', deleteProject);

// partial modification of project by id
router.patch('/:id', changeProject);

// get all tasks
// router.get('/tasks', getAllTasks);

// get a single task
//router.get('/tasks/:taskId', getAllTasks);

// get all tasks for a project
router.get('/:projectId/tasks', getAllTasks);

// add a task to a project
router.post('/:projectId/tasks/', createTask);

// edit a task
router.patch('/:projectId/tasks/:id', changeTask);

// delete a task
// router.patch('/:projectId/tasks/:id', changeTask);


export default router;