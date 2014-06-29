
Now that you sort of have the idea of generators,
the next step is to make the simplest Koa app, ever.

Unlike Express where you use node.js' `req` and `res` object,
Koa exposes its own very similar `this.request` and `this.response` objects.
Also unlike Express and node.js,
Koa uses getters and setters instead of methods.

For example,
in node.js, you might be used to the following:

```js
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('hello world');
```

In Express, there is a shortcut:

```js
res.send('hello world');
```

However, in Koa, we use getter/setter:

```js
app.use(function* () {
  this.response.body = 'hello world';
})
```

## Exercise

Make an app that returns `hello world` for every response.
Verify the following are correct:

- Status Code: `200`
- `Content-Length`: `11`
- `Content-Type`: `text/plain; charset=utf-8`

> Hint: Koa sets these headers for you with strings!
