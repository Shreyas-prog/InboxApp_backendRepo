import express from 'express';
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.get('/get', getAllTasks);
router.post('/create', createTask);
router.post('/update', updateTask);    // no :id in path now
router.post('/delete', deleteTask);    // no :id in path

export default router;
