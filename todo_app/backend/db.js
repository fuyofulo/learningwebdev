const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://fuyofulo:sEHFqEhUkloaLjsq@cluster0.qir16f2.mongodb.net/todo_app");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}