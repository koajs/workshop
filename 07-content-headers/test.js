
var assert = require('assert');
var request = require('supertest');

var app = require('./index.js');

describe('Content Headers', function () {
  describe('when sending plain text', function () {
    it('should return "ok"', function (done) {
      request(app.listen())
      .get('/')
      .set('Content-Type', 'text/plain')
      .set('Content-Length', '3')
      .send('lol')
      .expect(200)
      .expect('ok', done);
    })
  })

  describe('when sending JSON', function () {
    it('should return that JSON', function (done) {
      // just a random JSON body. don't bother parsing this.
      var body = JSON.stringify({});

      request(app.listen())
      .get('/')
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Content-Length', Buffer.byteLength(body))
      .send(body)
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect('Content-Length', 17)
      .end(function (err, res) {
        if (err) return done(err);

        assert.equal('hi!', res.body.message);
        done();
      })
    })
  })
})
