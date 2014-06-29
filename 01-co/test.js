
var co = require('co');
var assert = require('assert');

var fs = require('./index.js');

describe('.stats()', function () {
  it('should stat this file', co(function* () {
    var stats = yield fs.stat(__filename);
    assert.ok(stats.size);
  }))

  it('should throw on a nonexistent file', co(function* () {
    try {
      yield fs.stat(__filename + 'lkjaslkdjflaksdfasdf');
      // the above expression should throw,
      // so this error will never be thrown
      throw new Error('nope');
    } catch (err) {
      assert(err.message !== 'nope');
    }
  }))
})

describe('.exists()', function () {
  it('should find this file', co(function* () {
    assert.equal(true, yield fs.exists(__filename))
  }))

  it('should return false for a nonexistent file', co(function* () {
    assert.equal(false, yield fs.exists(__filename + 'kljalskjdfklajsdf'))
  }))
})
