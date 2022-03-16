import express from 'express';

import { getAllProjects, createProject, getProject, changeProject, deleteProject } from '../controllers/projects.js'

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

export default router;