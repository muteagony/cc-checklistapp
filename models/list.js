const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: String,
    tasks: [taskSchema]
});

const List = mongoose.model('List', listSchema);

export default List;