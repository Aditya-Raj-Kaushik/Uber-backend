const express = require('express')
const app = express()
const userRoutes = require('./routes/user.router')

app.use('/',userRoutes)

module.exports = app