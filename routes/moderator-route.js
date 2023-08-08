const express = require('express')
const jwt = require('jsonwebtoken')
const moderatorRoute = express.Router()

moderatorRoute.get('/:id', (req, res) => {
    req.params.id
})

moderatorRoute.get('/', (req, res) => {
    res.send('Moderator page, get method')
})

moderatorRoute.post('/', (req, res) => {
    res.send('Moderator page, post method')
})

moderatorRoute.put('/', (req, res) => {
    res.send('Moderator page, put nethod')
})

moderatorRoute.delete('/', (req, res) => {
    res.send('Moderator page, delete nethod')
})

module.exports = moderatorRoute