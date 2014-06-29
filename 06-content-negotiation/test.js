
var assert = require('assert');
var request = require('supertest');

var app = require('./index.js');

describe('Content Negotiation', function () {
  it('when "Accept: gzip" it should return gzip', function (done) {
    request(app.listen())
    .get('/')
    .set('Accept-Encoding', 'gzip')
    .expect(200)
    .expect('Content-Encoding', 'gzip')
    .expect('hello world', done);
  })

  it('when "Accept: identity" it should not compress', function (done) {
    request(app.listen())
    .get('/')
    .set('Accept-Encoding', 'identity')
    .expect(200)
    .expect('hello world', function (err, res) {
      if (err) return done(err);

      assert.equal(res.headers['content-encoding'] || 'identity', 'identity');
      done();
    });
  })
})
