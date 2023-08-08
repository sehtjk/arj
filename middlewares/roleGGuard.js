 function roleGuard(...args) {
    return (req, res, next) => {
        const role = req.role
        if (!args.includes(role)) {
            res.status(403).json({ message: "Forbidden" })
            return
        }
        next()
    }
}


module.exports = roleGuard