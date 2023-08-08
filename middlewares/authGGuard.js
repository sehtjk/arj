
const jwt = require('jsonwebtoken')

function authGuard(req, res, next) {
    try {
        const token = req.headers?.authorization?.split(' ')[1]
        if (!token) {
            throw new Error('Token must be provided')
        }
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
        const { username, role } = jwt.verify(token, accessTokenSecret)
        req.username = username
        req.role = role
        next()
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = authGuard