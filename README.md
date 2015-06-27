# koa

In this workshop, you will learn the basics of [koa](https://github.com/koajs/koa),
[Express'](https://github.com/visionmedia/express) spiritual successor.
This workshop was created for the [2014 LXJS conference in Lisbon, Portugal](https://github.com/lxjs/training-koa),
and will be continuously maintained.
If you have any questions or have suggestions for additional exercises,
please let us know!

## Resources

This workshop assumes you've had experience with:

- node.js
- Express, Restify, or any similar node.js frameworks
- Asynchronous programming - callbacks or promises

ES6 generators are relatively new.
This training will only give you a superficial look into generators.
You should read these resources before and after doing this workshop:

- [co](https://github.com/visionmedia/co) - the control flow engine used by koa
- [koajs](http://koajs.com) - the official web page for koa
- [koa examples](https://github.com/koajs/examples) - a lot of examples for koa
- http://www.jongleberry.com/koa.html - some blog posts on koa

## Instructions

Install node 0.11.13+. Using `nvm`, you can install it like this:

```bash
nvm install 0.11.13
nvm use 0.11.13
```

You can also install it directly from http://nodejs.org
or using various other node version managers such as [n](https://github.com/visionmedia/n).

Then you must install this workshop.
You can either fork this workshop (recommended) or clone it:

```bash
git clone git://github.com/koajs/workshop
cd workshop
```

Then install all the dependencies:

```bash
npm install
npm install -g mocha
```

Go through each training, which are stored in folders, in numerical older.
Read the `README` file, edit the `index.js` files, then run each test by executing the following:

```bash
mocha --harmony-generators test.js
```

If you get an error message like `SyntaxError: Unexpected token *`,
this means you didn't run the the process with `--harmony-generators`.

## Learning more than just Koa

Although writing tests is not part of this workshop,
you should still learn how they work.
An important part of creating apps is creating the tests for it.
Inspect the `test.js` files and see how [supertest](https://github.com/visionmedia/supertest)
and [mocha](https://github.com/visionmedia/mocha) are used,
both of which are used in Koa, Express, and libraries and frameworks.
You will also see what is expected from your sample apps by reading the tests.

After you finish each training,
you may want to `git commit` so you have a history of what you've done:

```bash
git commit -a -m "i finished training 1!"
```

Many small commits is good practice!

## Contact

* [Jonathan Ong](https://github.com/jonathanong) - [@jongleberry](https://twitter.com/jongleberry)
