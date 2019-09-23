const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    tags: [String],
    isCompleted: Boolean,
    dueDate: {type: Date, default: Date.now}
});

const Task = mongoose.model('Task', taskSchema);

export default Task;