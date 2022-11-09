const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new mongoose.Schema ({
    taskName: {type: String, required: true},
    status: {type: String, required: true},
    priority: {type: String, required: true},
    date: {type: Number, required: true},
    notes: {type: Number, required: true},
    completed: Boolean
})

const TaskItem = mongoose.model("TaskItem", itemSchema)
module.exports = TaskItem