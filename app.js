const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const workoutRouter = require('./routes/workoutRouter')
const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use('/api', workoutRouter)


module.exports = app