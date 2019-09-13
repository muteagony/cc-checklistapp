 const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/checklistapp')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Error!', err));