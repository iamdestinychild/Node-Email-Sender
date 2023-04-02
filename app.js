const express = require('express')
require('dotenv').config
require('express-async-errors')

const errorHandler = require('./middelware/error_handler')
const notFound = require('./middelware/not-found')


const app = express()

// routes



// middelware
app.use(errorHandler)
app.use(notFound)

const port = process.env.PORT || 4444

const start = () => {
    try {
        app.listen(port, console.log(`server is litening on port ${port}`))
    } catch (err) {
        console.log(err)
    }
}