
In Koa, error handling is done using `try/catch` (except with event emitters).
You might not have seen this in a while if you've been working with
Express and most other node frameworks.
Unlike, Express, error handlers are simply decorators that you add to the __top__ of your middleware stack.

```js
app.use(function* errorHandler(next) {
  try {
    // catch all downstream errors
    yield next;
  } catch (err) {
    // do something with the error
  }
})

app.use(function* () {
  // throw an error downstream
  throw new Error('boom!');
})
```

Each Koa `app` is an [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter) instance.
All errors uncaught by any middleware are caught by `app.on('error', function (err, context) {})`.
This is useful for logging.
However, if you create your own error handler (i.e. catching it),
you will have to manually emit these events yourself.

In a real app, you would only want to `app.emit('error', err, this)`
unknown errors. Client errors, such as validation errors,
don't need to be logged.
Using an error handler also allows you to create your own error pages.

## Exercise

Create an error handler that intercepts downstream errors,
responds to the client with `internal server error`,
and emits the error on `app`.
