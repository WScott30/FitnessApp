const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const workoutRouter = require('./routes/workoutRouter')
const macroRouter = require('./routes/macroRouter')
const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use('/api', workoutRouter)
app.use('/api', macroRouter )


module.exports = app