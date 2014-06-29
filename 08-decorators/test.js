
var request = require('supertest');

var app = require('./index.js');

describe('Decorators', function () {
  it('should return the string escaped', function (done) {
    request(app.listen())
    .get('/')
    .expect(200)
    .expect('this following HTML should be escaped: &lt;p&gt;hi!&lt;/p&gt;', done);
  })
})
