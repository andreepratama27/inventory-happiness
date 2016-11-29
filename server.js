require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const router = require('./app/routes/api')
const mongoose = require('mongoose')
const vhost = require('vhost')
const web = require('./app/routes/web')

const app = express()

const mongoUrl = process.env.MONGODB_URL
mongoose.Promise = global.Promise
mongoose.connect(mongoUrl)

app.set('views', './views')
app.set('view engine', 'ejs')


app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(router)
app.use(web)

app.use(vhost('imk.dev', app))

app.listen(3000, function() {
	console.log("Server on port 3000")
})
