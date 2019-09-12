 const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/checklistapp')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Error!', err));

const taskSchema = new mongoose.Schema({
    name: String,
    tags: [String],
    isCompleted: Boolean,
    dueDate: {type: Date, default: Date.now}
});

const Task = mongoose.model('Task', taskSchema);

const listSchema = new mongoose.Schema({
    name: String,
    tasks: [taskSchema]
});

const List = mongoose.model('List', listSchema);

function createList(name, tasks){
    const list = new List({
        name,
        tasks,
    });
    list.save();
}

async function addTask(listId, task){
    const list = await List.findById(listId);
    list.tasks.push(task);
    list.save();
}
//passing new empty list - give only list name argument
//createList('grocery list')

//passing list with task, which does not have all properties (you can update them later on)
////createList('grocery list', new Task({name:'tomato'}));

//passing new list with task
//createList('grocery list', new Task({name:'tomato', tags: ['important', 'for salad'], isCompleted: false, dueDate: new Date('2019-10-14')}));

//adding task to existing list
//addTask('5d79f3a5878d9f26189b44c4', new Task({name: 'funky hat'}));