
var request = require('supertest');

var app = require('./index.js');

describe('Templating', function () {
  it('should return the template', function (done) {
    var html = '<!DOCTYPE html><head><html><title>Koa Templating</title></html><body><p>Hello!</p></body></head>';

    request(app.listen())
    .get('/')
    .expect(200)
    .expect('Content-Type', /text\/html/)
    .expect(html, done);
  })
})
