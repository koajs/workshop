
Koa uses [co](https://github.com/visionmedia/co) under the hood,
so to fully understand how Koa works,
you must understand co.

Co uses ES6 generators.
You can tell if a function is a generator if it has a star:

```js
function* () {

}
```

`yield` is a keyword specific to generators and allows users to __arbitrarily suspend__ functions at any `yield` point.
`yield` is not a magical async function - co does all that magic behind the scenes.

You can think of `co`'s use of generators like this with node callbacks:

```js
function* () {
  var val = yield /* breakpoint */ function (next) {
    // #pause at the break point

    // execute an asynchronous function
    setTimeout(function () {
      // return the value node.js callback-style
      next(null, 1);
    }, 100);
  }

  assert(val === 1);
}
```

This workshop will not cover all the intricacies of generators as that alone would
be its own workshop, and most people (including myself) wouldn't be able
to understand generators in less than a day.

## Yieldables

You can only `yield` a few types of "async" things in Co. We call these "yieldables".:

### Thunks

Thunks are asynchronous functions that only allow a callback:

```js
function (done) {
  setTimeout(function () {
    done(/* error: */ null, true);
  }, 100)
}
```

If there are additional arguments on this function,
a neat trick is to simply wrap it in a thunk or return a thunk.
You may be interested in [thunkify](https://github.com/visionmedia/node-thunkify),
but we will learn how to "thunkify" node.js-style callbacks in this exercise.

### Promises

We won't show you how to write code with promises,
but you can `yield` them!

## Creating yieldables

In this exercise, we will learn how to create "yieldables" from callbacks.
We will not go into depth of how generators and `co` works as it is unnecessary for Koa.

## Learning more

- [thunkify](https://github.com/visionmedia/node-thunkify)
- [mz](https://github.com/normalize/mz)
- [co-fs](https://github.com/visionmedia/co-fs)
