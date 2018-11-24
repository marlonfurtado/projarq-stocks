import express from "express"
import mongoose from 'mongoose'
import bodyParser from "body-parser"

// DATABASE
const dev_db_url = 'mongodb://marlonfurtado:stockskurtz123@ds115664.mlab.com:15664/stocks-kurtz'
const mongoDB = process.env.MONGODB_URI || dev_db_url
mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// SERVER
const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))


// ROUTES
import customer from './src/router/customer'
import portfolio from './src/router/portfolio'
import assets from './src/router/assets'

server.use('/customer', customer)
server.use('/portfolio', portfolio)
server.use('/assets', assets)


server.listen(3000, function () {
  console.log('Running on port 3000')
})
