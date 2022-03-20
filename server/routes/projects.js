import express from 'express';
import { 
    getAllProjects, 
    createProject, 
    getProject, 
    changeProject, 
    deleteProject 
} from '../controllers/projects.js';

const router = express.Router();

// get all projects
router.get('/', getAllProjects);

//add new project
router.post('/', createProject);

// get project by id
router.get('/:id', getProject);

// delete by id
router.delete('/:id', deleteProject);

// partial modification of project by id
router.patch('/:id', changeProject);

// get all tasks for a project
//router.get('/', getAllTasks);

// add a task to a project
//router.post('/', createTasks);

// edit a task
//router.patch('/', changeTask);


export default router;