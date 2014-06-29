
var request = require('supertest');

var app = require('./index.js');

describe('Routing', function () {
  it('GET / should return "hello world"', function (done) {
    request(app.listen())
    .get('/')
    .expect('hello world', done);
  })

  it('GET /404 should return "page not found"', function (done) {
    request(app.listen())
    .get('/404')
    .expect('page not found', done);
  })

  it('get /500 should return "internal server error"', function (done) {
    request(app.listen())
    .get('/500')
    .expect('internal server error', done);
  })
})
