const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new mongoose.Schema ({
    taskName: {type: String, required: true},
    status: {type: String, required: true},
    priority: {type: String, required: true},
    date: {type: String, required: true},
    notes: {type: String, required: true},
    completed: Boolean
})

const TaskItem = mongoose.model("TaskItem", itemSchema)
module.exports = TaskItem