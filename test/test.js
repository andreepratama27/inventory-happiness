var assert = require('assert')
var request = require('supertest');
var express = require('express');
const webRouter = require('../app/routes/web')
const apiRouter = require('../app/routes/api')
const mongoose = require('mongoose')

var app = express();

app.use(apiRouter)
app.use(webRouter)

app.set('views', './views')
app.set('view engine', 'ejs')

mongoose.Promise = global.Promise

var mongoUrl = ""

var agent = request.agent(app);

if (process.env.DBTRAVIS == 'travis') {
  mongoUrl = "mongodb://localhost/imk"
} else {
  mongoUrl = "mongodb://172.17.0.2/imk"
}

mongoose.connect(mongoUrl)

describe('Web Page', function() {
  it('visit home page', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  })
  it('visit login page', function(done){
  	request(app)
      .get('/login')
      .expect(200, done);
  })
  it('visit hoax page', function(done){
    request(app)
      .get('/hoaxer')
      .expect(404, done);
  })
  it('get API', function (done){
    request(app)
      .get('/api/product')
      .expect('Content-Type', /json/)
      .expect({})
      .expect(200)
      .end(function(err, res){
        done()
      })
  })
});