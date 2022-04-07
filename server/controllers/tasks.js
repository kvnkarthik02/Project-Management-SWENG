import { v4 as uuidv4 } from 'uuid';
import { Task } from '../models/Task.js';


// get all tasks
export const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find();
        res.json(task)
    } catch (error) {
        res.json({message: error});
    }
}

// get project by id
export const getTask = async (req,res) => {
    try {
        const { id } = req.params;
        const tasks = await Task.find();
        const foundTask = tasks.find((task) => task.taskId === id);
        res.send(foundTask);
    } catch (error) {
        res.json({message: error});
    }
}

// get all tasks for a project
export const getAllTasksForProject = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.find();
        const tasks = await Task.find();
        res.json(tasks)
    } catch (error) {
        res.json({message: error});
    }
}

// create a task
export const createTask = async (req,res) => {
    const task = new Task({
        taskId: uuidv4(),
        projectId: req.params.projectId,
        taskName: req.body.taskName,
        taskDescription: req.body.taskDescription,
        hasDeadline: req.body.hasDeadline,
        deadline: req.body.deadline,
        isComplete: req.body.isComplete,
        skill: req.body.skill,
        skillLevel: req.body.skillLevel,
        allocatedTime: req.body.allocatedTime,
        employeeAssigned: req.body.employeeAssigned
    });
    try {
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (error) {
        res.json({message: error});
    }
}


// change task
export const changeTask = async (req, res) => {
    const taskName = req.body.taskName;

    try {
        if (taskName) {
            try {
                const updatedTask = await Task.updateOne(
                    { taskId: req.params.id},
                    { $set: { taskName: req.body.taskName } }
                    ) ;
                    res.json(updatedTask);
            } catch (error) {
                res.json(error);
            }
        }
        // TO DO
    } catch (error) {
        res.json({message: error});
    }

}

export const assignTask = async (req, res) => {
    console.log(req.params.taskId)
    console.log(req.body.employeeAssigned)

        try {
            const updatedTask = await Task.findOneAndUpdate(
                { taskId: req.params.taskId},
                { $set: { employeeAssigned: req.body.employeeAssigned } }
                ) ;
                res.json(updatedTask);
        } catch (error) {
            res.json(error);
        }
        
        

}

// delete task
export const deleteTask = async (req, res) => {
    try {
        const removedTask = await Task.deleteOne({taskId: req.params.id});
        res.json(removedTask);
    } catch (error) {
        res.json({message: error});
    }
}