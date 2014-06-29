
Unlike Express and many other frameworks, Koa does not include a router.
Without a router, routing in Koa can be done by using `this.request.path` and `yield next`.
To check if the request matches a specific path:

```js
app.use(function* (next) {
  if (this.request.path === '/') {

  }
})
```

To skip this middleware:

```js
app.use(function* (next) {
  if (skip) return yield next;
})
```

This is very similar to Express' `next()` call.

Combining this together,
you can route paths like this:

```js
app.use(function* (next) {
  // skip the rest of the code if the route does not match
  if (this.request.path !== '/') return yield next;

  this.response.body = 'we are at home!';
})
```

By `return`ing early,
we don't need to bother having any nested `if` and `else` statements.
Note that we're checking whether the path __does not match__,
then early returning.

Of course, you can write this the long way:

```js
app.use(function* (next) {
  if (this.request.path === '/') {
    this.response.body = 'hello!';
  } else {
    yield next;
  }
})
```

## Exercise

Create an app that returns the following responses from the following routes:

- `/` - `hello world`
- `/404` - `page not found`
- `/500` - `internal server error`.

In a real app, having each route as its own middleware is more ideal
as it allows for easier refactoring.

## Learn More

There are more properties you're probably interested in when routing:

- `this.request.method`
- `this.request.query`
- `this.request.host`
