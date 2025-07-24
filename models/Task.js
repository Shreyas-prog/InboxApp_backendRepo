
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  description: String,
  completionTime: String,
  displayEditOptions: Boolean,
  priorityType: String,
  isCompleted: Boolean,
  selectedDate: String,
  extraFields: mongoose.Schema.Types.Mixed
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
