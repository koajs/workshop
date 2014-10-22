
An important part of HTTP servers is content negotiation.
Perhaps the most important is `Accept-Encoding` and `Content-Encoding`,
which negotiates whether to compress content.
This is the only `Accept` header supported by most CDNs.

In Koa, `this.request.acceptsEncodings()` does all the content negotiation for you.
Remember, if you compress your body, you should set the `Content-Encoding` header.
View more about content negotiation in the [official docs](http://koajs.com/#content-negotiation).

You __do not__ want to do anything like `if (~this.request.headers['accept-encoding'].indexOf('json'))`.
These headers are very complex, and this type of logic is not specification-compliant.
Use the `this.request.accepts()`-type methods.

## Exercise

Using `this.request.acceptsEncodings()`,
either send `hello world` gzipped or not gzipped (identity).
For the purposes of this test, always set the `Content-Encoding` header,
even if it's just `identity`.
