
var fs = require('fs');
var koa = require('koa');

var app = module.exports = koa();

/**
 * Create the `GET /stream` route that streams this file.
 * In node.js, the current file is available as a variable `__filename`.
 */

app.use(function* (next) {
  if (this.request.path !== '/stream') return yield* next;

  // this.response.type =
  // this.response.body =
});

/**
 * Create the `GET /json` route that sends `{message:'hello world'}`.
 */

app.use(function* (next) {
  if (this.request.path !== '/json') return yield* next;

  // this.response.body =
});
