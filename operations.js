import List from "./models/list";

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


async function updateTaskTags(listId, tag){
    const list = await List.findById(listId);
    list.task.tags.push(tag)
    list.save();
}

async function changeTaskCompletion(listId){
    const list = await List.findById(listId);
    list.task.isCompleted = !list.task.isCompleted;
    list.save();

}

async function updateTaskDueDate(listId, dueDate){
    const list = await List.findById(listId);
    list.task.dueDate = dueDate;
    list.save();
}