import express from 'express';
import {
    assignTask,
    getAllTasks,
} from '../controllers/tasks.js';
const router = express.Router();

// get all tasks
router.get('/', getAllTasks);

// assign task to an employee
router.patch('/:taskId/assignTask/', assignTask)

export default router;