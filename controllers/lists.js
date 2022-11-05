// Dependencies
const express = require("express");
const app = express()
const router = express.Router();

//INDUCES:
// SEED

// INDEX
app.get('/pendulum', (req, res) => {
    res.render('index.ejs')  
})

// NEW
app.get('/pendulum/new', (req, res) => {
    res.render('new item list')
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