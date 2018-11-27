import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

// DATABASE
const mongoDB = process.env.MONGODB_URI || ""
mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// SERVER
const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))


// ROUTES
import assets from './src/router/assets'
import portfolio from './src/router/portfolio'
import transaction from './src/router/transaction'
import customer from './src/router/customer'

server.use('/assets', assets)
server.use('/portfolio', portfolio)
server.use('/transaction', transaction)
server.use('/customer', customer)

server.listen(3000, function () {
  console.log('Running on port 3000')
})
