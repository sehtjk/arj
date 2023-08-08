const express = require('express')
const dotenv = require('dotenv')
const productRoute = require('./routes/product-route')
const categoryRoute = require('./routes/category-route')
const authRoute = require("./routes/auth-route")
const authguard = require("./middlewares/authGGuard")
const roleGuard = require("./middlewares/roleGGuard")
const moderRoute = require("./routes/moderator-route")
const userRoute = require("./routes/user.route")
const cartRoute = require("./routes/cart-route")
dotenv.config()
const app = express()
const port = process.env.PORT || 9999

app.use(express.json())
app.use('/product', productRoute)
app.use('/category', categoryRoute)
app.use('/auth', authRoute)
// U A M
app.use('/user', userRoute)
app.use('/moderator', moderRoute)
// U A M

app.post('/', (req, res) => {
    const { username, role } = req
    res.send({ username, role })
})


app.listen(port, () => console.log(`Server is runnin on port ${port}`))