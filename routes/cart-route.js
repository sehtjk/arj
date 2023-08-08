const express = require('express')
const cartRoute = express.Router()


cartRoute.get('/', (req, res) => {
    res.send('Carts page, get method')
})

cartRoute.post('/', (req, res) => {
    res.send('Carts page, post method')
})

cartRoute.delete('/', (req, res) => {
    res.send('Carts page, delete method')
})

module.exports = cartRoute
