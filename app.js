const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const workoutRouter = require('./routes/workoutRouter')
const macroRouter = require('./routes/macroRouter')
require('dotenv').config()

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())

app.use('/api/workouts', workoutRouter)
app.use('/api/macros', macroRouter )


module.exports = app