const mongoose = require('mongoose');
const schema = mongoose.Schema;

const todoschema = new schema({
    todo:{
        type: String,
        required: true

    }
})

module.exports = new mongoose.model('todos', todoschema)