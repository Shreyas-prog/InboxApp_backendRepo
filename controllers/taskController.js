
import Task from '../models/Task.js';
import { v4 as uuidv4 } from 'uuid';

export const getAllTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: 1 });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const taskData = req.body;
  const newTask = new Task({
    ...taskData,
    id: uuidv4()
  });
  await newTask.save();
  res.status(201).json(newTask);
};

export const updateTask = async (req, res) => {
  const { id, ...updates } = req.body;
  if (!id) return res.status(400).json({ error: 'Task id is required' });

  const updated = await Task.findOneAndUpdate({ id }, updates, { new: true });
  res.json(updated);
};


export const deleteTask = async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Task id is required' });

  await Task.findOneAndDelete({ id });
  res.json({ message: 'Deleted successfully' });
};

