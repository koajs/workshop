
So far, we've only used strings as bodies.
Koa supports the following types of bodies:

- Strings
- Buffers
- Streams (node)
- JSON Objects

If the body is not treated as the first three,
Koa will assume that you want to send a JSON response,
treating REST APIs as first-class citizens.

```js
app.use(function* (next) {
  this.response.body = {
    message: 'this will be sent as a JSON response!'
  };
})
```

When setting a stream as a body,
Koa will automatically add any error handlers so you don't have to worry about error handling.

```js
var fs = require('fs');

app.use(function* (next) {
  this.response.body = fs.createReadStream('some_file.txt');
  // koa will automatically handle errors and leaks
})
```

## Exercise

Create an app that returns a stream when the client requests `/stream` and a JSON body when the client requests `/json`.

## Bonus

When setting the body of the stream, Koa can't infer the `Content-Length` of the
body. Set the `Content-Length` header yourself using `this.response.length=`
and the "yieldable" version of `fs` you've created in exercise 1.
