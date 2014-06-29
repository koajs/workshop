
var fs = require('fs');
var koa = require('koa');
var path = require('path');
var parse = require('co-body');
var csrf = require('koa-csrf');
var session = require('koa-session');

var app = module.exports = koa();

var form = fs.readFileSync(path.join(__dirname, 'form.html'), 'utf8');

// adds .csrf among other properties to `this`.
csrf(app);

// use koa-session somewhere at the top of the app
app.use(session());

// we need to set the `.keys` for signed cookies and the cookie-session module
app.keys = ['secret1', 'secret2', 'secret3'];

app.use(function* home(next) {
  if (this.request.path !== '/') return yield next;

  if (!this.session.authenticated) this.throw(401, 'user not authenticated');

  this.response.body = 'hello world';
})

/**
 * If successful, the logged in user should be redirected to `/`.
 */

app.use(function* login(next) {
  if (this.request.path !== '/login') return yield* next;
  if (this.request.method === 'GET') return this.response.body = form.replace('{{csrf}}', this.csrf);

})

/**
 * Let's 303 redirect to `/login` after every response.
 * If a user hits `/logout` when they're already logged out,
 * let's not consider that an error and rather a "success".
 */

app.use(function* logout(next) {
  if (this.request.path !== '/logout') return yield* next;

})

/**
 * Serve this page for browser testing if not used by another module.
 */

if (!module.parent) app.listen(process.env.PORT || 3000);
