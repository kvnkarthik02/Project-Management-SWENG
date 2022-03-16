import { v4 as uuidv4 } from 'uuid';

// gets all projects
export const getAllProjects = (req, res) => {
    console.log(projects);

    res.send(projects);
}

// creates a new project
export const createProject = (req,res) => {
    const project = req.body;

    projects.push({ ...project, id: uuidv4()});

    res.send(`Project ${project.ProjectName} added to db`);
}

// get project by id
export const getProject = (req,res) => {
    const { id } = req.params;

    const foundProject = projects.find((project) => project.id === id);

    res.send(foundProject)
}

// delete project by id
export const deleteProject = (req,res) => {
    const { id } = req.params;

    projects = projects.filter((project) => project.id !== id);

    res.send(`User with id ${id} deleted`)
}

// partial modification of project by id
export const changeProject = (req,res) => {
    const { id } = req.params;
    const { ProjectName } = req.body;

    const project = projects.find((project) => project.id === id);

    if(ProjectName) project.ProjectName = ProjectName;

    // add more values
}