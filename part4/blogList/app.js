const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')
const express = require("express");
const middleware = require('./utils/middleware')
const blogsRouter = require('./controllers/blogs');

const app = express();

mongoose.set('strictQuery', false)
mongoose.connect(config.MONGO_URI, { family:4 })
    .then(() => {logger.info('MongoDB connected')})
    .catch(err => logger.info('error connecting to MongoDB',err))

app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/blogs', blogsRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app