const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express()

require('dotenv').config()

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3380)
