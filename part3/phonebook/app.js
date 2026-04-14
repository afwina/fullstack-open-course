const express = require('express')
const config = require('./utils/config')
const middleware = require('./utils/middleware')
const personsRouter =  require('./controllers/persons')
const mongoose = require("mongoose");
const logger = require('./utils/logger')

const app = express()

mongoose.set('strictQuery', false)
mongoose.connect(config.MONGO_URI, { family:4 })
    .then(() => {logger.info('MongoDB connected')})
    .catch(err => logger.info('error connecting to MongoDB',err))

app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/persons', personsRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app