const express = require('express')
const jwt = require('jsonwebtoken')
const authRoute = express.Router()

authRoute.post('/sign-in', (req, res) => {
    try {
        const { username, password } = req.body
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
        const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET
        const accessToken = jwt.sign({ username, role: 'user' }, accessTokenSecret, { expiresIn: '5m' })
        const refreshToken = jwt.sign({ username, role: 'user' }, refreshTokenSecret, { expiresIn: '7d' })
        console.log(accessToken);
        res.json({ accessToken, refreshToken })
    } catch (error) {
        res.json({ message: error.message })
    }
})

authRoute.post('/sign-in/admin', (req, res) => {
    try {
        const { username, password } = req.body
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
        const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET
        const accessToken = jwt.sign({ username, role: 'admin' }, accessTokenSecret, { expiresIn: '5m' })
        const refreshToken = jwt.sign({ username, role: 'admin' }, refreshTokenSecret, { expiresIn: '7d' })
        res.json({ accessToken, refreshToken })
    } catch (error) {
        res.json({ message: error.message })
    }
})

authRoute.post('/sign-in/moderator', (req, res) => {
    try {
        const { username, password } = req.body
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
        const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET
        const accessToken = jwt.sign({ username, role: 'moderator' }, accessTokenSecret, { expiresIn: '5m' })
        const refreshToken = jwt.sign({ username, role: 'moderator' }, refreshTokenSecret, { expiresIn: '7d' })
        res.json({ accessToken, refreshToken })

    } catch (error) {
        res.json({ message: error.message })
    }
})

authRoute.post('/refresh', (req, res) => {
    try {
        const { refreshToken } = req.body
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
        const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET
        const { username, role } = jwt.verify(refreshToken, refreshTokenSecret)
        const accessToken = jwt.sign({ username, role }, accessTokenSecret, { expiresIn: '5m' })
        res.json({ accessToken })

    } catch (error) {
        res.send(error.message)
    }
})

module.exports = authRoute