const express = require('express')
const router = require('./app/routes/api')
const web = require('./app/routes/web')
const bodyParser = require('body-parser')

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')


app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(router)
app.use(web)

app.listen(3000, function() {
	console.log("Server on port 3000");
});
