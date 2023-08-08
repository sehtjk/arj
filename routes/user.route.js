const express = require('express')
const userRoute = express.Router()

userRoute.get('/:id', (req, res) => {
    req.params.id
})

userRoute.get('/', (req, res) => {
    res.send('User page, get method')
})

userRoute.post('/', (req, res) => {
    res.send('User page, post method')
})

userRoute.put('/', (req, res) => {
    res.send('User page, put nethod')
})

userRoute.delete('/', (req, res) => {
    res.send('User page, delete nethod')
})

module.exports = userRoute