const mongoose = require('mongoose')

const productSchema = new mongoose.Schema ({
    taskName: {type: String, required: true},
    status: {type: String, required: true},
    priority: {type: String, required: true},
    date: {type: Number, required: true},
    notes: {type: Number, required: true},
    completed: Boolean
})

const taskItem = mongoose.model("taskItem", productSchema)
module.exports = taskItem