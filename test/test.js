var assert = require('assert')
var request = require('supertest');
var express = require('express');
const webRouter = require('../app/routes/web')

var app = express();

app.use(webRouter)
app.set('views', './views')
app.set('view engine', 'ejs')
console.log(process.env.DBTRAVIS)

describe('GET Web Route', function() {
  it('get index page', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  })
  it('get login page', function(done){
  	request(app)
      .get('/login')
      .expect(200, done);
  })
  it('get hoax page', function(done){
  	request(app)
      .get('/hoaxer')
      .expect(404, done);
  })
});