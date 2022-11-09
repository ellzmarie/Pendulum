// Dependencies
const express = require("express");
const app = express()
const pendulumRouter = express.Router();
const taskData = require('../models/seed.js')
const TaskItem = require('../models/product.js')

//INDUCES:
// SEED
pendulumRouter.get('/seed', (req, res) => {
    TaskItem.deleteMany({}, (error, allItems) => {})
    TaskItem.create(taskData, (error, data) => {
        res.redirect('/pendulum')
    })
})

// INDEX
pendulumRouter.get('/', (req, res) => {
    TaskItem.find({}, (error, allItems) => {
        res.render('index.ejs', { taskitems: allItems })
    })
})

// NEW
pendulumRouter.get('/new', (req, res) => {
    res.render('new.ejs')
})

// DELETE / DESTROY
pendulumRouter.delete('/:id', (req, res) => {
    TaskItem.findByIdAndRemove(req.params.id, (error, deletedItem) => {
        res.redirect('/pendulum')
    })
})

// UPDATE
pendulumRouter.put('/:id', (req, res) => {
    req.body.completed = (req.body.completed === "on") ? true : false;
    TaskItem.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true },
        (err, updatedItem) => {
        res.redirect(`/pendulum/${req.params.id}`)
    })
})

// CREATE
pendulumRouter.post('/:id', (req, res) => {
    req.body.completed = req.body.completed === "on" ? true : false;
    TaskItem.create(req.body, (err, createdTask) => {
        if (err) console.log(err)
        res.redirect('/pendulum')
    })
})

// EDIT 
pendulumRouter.get('/:id/edit', (req, res) => {
    TaskItem.findById(req.params.id, (err, foundTask) => {
        if (err) console.log(err)
        res.render('edit.ejs')
        })
    })

// SHOW
pendulumRouter.get('/findById:id', (req, res) => {
    TaskItem.findById(req.params.id, (err, foundTask) => {
        // if (err) console.log(err)
        res.render('show.ejs', {
            item: item
        })
    })
})

module.exports = pendulumRouter