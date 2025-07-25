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
router.post('/update', updateTask);
router.post('/delete', deleteTask);

export default router;
