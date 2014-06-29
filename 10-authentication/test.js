
var assert = require('assert');
var request = require('supertest');

var app = require('./index.js');
var server = app.listen();

request = request.agent(server);

describe('Authentication', function () {
  describe('when not authenticated', function () {
    it('GET / should 401', function (done) {
      request.get('/').expect(401, done);
    })

    it('GET /login should 200', function (done) {
      request.get('/login')
      .expect('Content-Type', /text\/html/)
      .expect(/^<form/, done);
    })

    it('GET /logout should 303', function (done) {
      request.get('/logout').expect(303, done);
    })
  })

  describe('logging in', function () {
    it('GET /login should render a CSRF token', function (done) {
      request.get('/login')
      .expect('Content-Type', /text\/html/)
      .expect(200, function (err, res) {
        if (err) return done(err);

        var html = res.text;
        csrf = /name="_csrf" value="([^"]+)"/.exec(html)[1];
        done();
      })
    })

    it('POST /login should 403 without a CSRF token', function (done) {
      request.post('/login')
      .send({
        username: 'username',
        password: 'password'
      })
      .expect(403, done);
    })

    it('POST /login should 403 with an invalid CSRF token', function (done) {
      request.post('/login')
      .send({
        username: 'username',
        password: 'password',
        _csrf: 'lkjalksdjfasdf'
      })
      .expect(403, done);
    })

    it('POST /login should 400 with bad auth details', function (done) {
      request.post('/login')
      .send({
        _csrf: csrf,
        username: 'klajklsdjfasdf',
        password: 'lkjlakjsdlkfja'
      })
      .expect(400, done);
    })

    it('POST /login should 303 with good auth details', function (done) {
      request.post('/login')
      .send({
        _csrf: csrf,
        username: 'username',
        password: 'password'
      })
      .expect(303)
      .expect('Location', '/', done);
    })

    it('GET / should return hello world', function (done) {
      request.get('/')
      .expect(200)
      .expect('hello world', done);
    })
  })

  describe('logging out', function () {
    it('GET /logout should 303 to /login', function (done) {
      request.get('/logout')
      .expect(303)
      .expect('Location', '/login', done);
    })

    it('GET / should 401', function (done) {
      request.get('/').expect(401, done);
    })
  })
})
