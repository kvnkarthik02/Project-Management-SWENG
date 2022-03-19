import express from 'express';
import { Project } from '../models/Project.js'
import { getAllProjects, createProject, getProject, changeProject, deleteProject } from '../controllers/projects.js'
import { deleteMemberById, getMemberById } from '../controllers/members.js';

const router = express.Router();


// get all projects
router.get('/', getAllMembers);

//add new project
router.post('/', createMember);

// get project by id
router.get('/:id', getMemberById);

// delete by id
router.delete('/:id', deleteMemberById);

// partial modification of project by id
router.patch('/:id', changeMember);

export default router;