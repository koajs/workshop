
To create an application, you probably need authentication.
The simplest cookie-based session module is [koa-session](https://github.com/koajs/session).
For CSRF protection, we've included [koa-csrf](https://github.com/koajs/csrf).
For body parsing, we've included [co-body](https://github.com/visionmedia/co-body).
Be sure to read the documentation on these middleware.

## Exercise

Let's create a very simple app with login and logout features.
Let's define the following routes:

- `/` - If the user logs in, they should see `hello world`.
  Otherwise, they should see a `401` error because they aren't logged in.
- `/login` - if the method is `GET`, a form should be returned.
  If the method is `POST`, it should validate the request body
  and attempt to login the user.
- `/logout` - it should logout the user.

We're not actually going to create users in this example.
The only acceptable authentication is:

```bash
username = username
password = password
```

Mark the user as authenticated by populating `this.session.authenticated`.
If `this.session.authenticated` exists, then the user is considered logged in.
In real life, you'd want to set `this.session.userid=` or something to specify the user.

For more specifics on how the app should work, consult the tests!
If you'd like to test it out on your computer,
run `PORT=3000 node --harmony-generators index.js` and open `localhost:3000` in your browser.
