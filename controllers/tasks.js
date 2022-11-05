// Dependencies
const express = require("express");
const app = express()
const pendulumRouter = express.Router();
const taskData = require('../models/seed.js')
const taskItem = require('../models/product.js')

//INDUCES:
// SEED
pendulumRouter.get('/seed', (req,res) => {
    taskItem.deleteMany({}, (error, allItems) => { })
    taskItem.create(taskData, (error, data) => {
        res.redirect('/pendulum')
    })
})

// INDEX
pendulumRouter.get('/', (req, res) => {
    taskItem.find({}, (error, allItems) => {
        res.render('index.ejs', { taskList: allItems }) 
    }) 
})

// NEW
pendulumRouter.get('/new', (req, res) => {
    res.render('new.ejs')
})

// // DELETE / DESTROY
// app.delete('/:id', (req, res) => {
//     res.render('delete items here')
// })

// // UPDATE
// app.put('/:id', (req, res) => {
//     res.render('update items')
//     // res.redirect('/')
// })

// // CREATE
// app.post('/:id', (req, res) => {
//     res.render('create item')
//     // res.redirect('/')
// })

// // EDIT 
// app.get('/:id/edit', (req, res) => {
//     res.render('/edit.ejs')
// })

// // SHOW
// app.get('/findById:id', (req, res) => {
//     res.render('')
// })

module.exports = pendulumRouter