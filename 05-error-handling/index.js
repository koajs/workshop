
var koa = require('koa');

var app = module.exports = koa();

app.use(function* errorHandler(next) {
  try {
    yield next;
  } catch (err) {
    // your error handling logic goes here
  }
});

app.use(function* () {
  throw new Error('boom!');
});
