var assert = require('assert');
var request = require('supertest');
var express = require('express');
const webRouter = require('../app/routes/web')

var app = express();

app.use(webRouter)
app.set('views', './views')
app.set('view engine', 'ejs')

describe('GET /user', function() {
  it('get index page', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});