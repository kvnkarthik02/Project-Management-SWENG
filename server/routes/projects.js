import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let projects = []

// get all projects
router.get('/', (req, res) => {
    console.log(projects);

    res.send(projects);
});

//add new project
router.post('/', (req,res) => {
    const project = req.body;

    projects.push({ ...project, id: uuidv4()});

    res.send(`Project ${project.ProjectName} added to db`);
});

// get project by id
router.get('/:id', (req,res) => {
    const { id } = req.params;

    const foundProject = projects.find((project) => project.id === id);

    res.send(foundProject)
});

// delete by id
router.delete('/:id', (req,res) => {
    const { id } = req.params;

    projects = projects.filter((project) => project.id !== id);

    res.send(`User with id ${id} deleted`)
});

// partial modification of project by id
router.patch('/:id', (req,res) => {
    const { id } = req.params;
    const { ProjectName } = req.body;

    const project = projects.find((project) => project.id === id);

    if(ProjectName) project.ProjectName = ProjectName;

    // add more values
});

export default router;