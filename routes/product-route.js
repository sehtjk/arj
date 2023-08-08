const express = require('express')
const authGuard = require('../middlewares/authGGuard')
const roleGuard = require('../middlewares/roleGGuard')
const productRoute = express.Router()


productRoute.get('/', (req, res) => {
    res.send('Products page, get method')
})

productRoute.post('/', authGuard, roleGuard('admin', 'moderator'), (req, res) => {
    res.send('Products page, post method')
})

productRoute.delete('/', (req, res) => {
    res.send('Products page, delete method')
})

module.exports = productRoute