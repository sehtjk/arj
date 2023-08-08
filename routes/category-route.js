const express = require('express')
const categoryRoute = express.Router()

categoryRoute.post('/', (req, res) => {
    res.send('Category page, post method')
})

categoryRoute.delete('/', (req, res) => {
    res.send('Category page, delete method')
})

categoryRoute.put('/', (req, res) => {
    res.send('Category page, put method')
})

categoryRoute.get('/', (req, res) => {
    res.send('Category page, get method')
})

module.exports = categoryRoute