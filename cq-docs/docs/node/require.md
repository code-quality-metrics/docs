---
id: require
title: Require and modules
sidebar_label: Require and modules
---

When using require, nodejs wraps the code that is inside the module into a function expression, invokes it and returns whatever is inside the exports property of the module. That function expression accepts this parameters: exports, require, module, filename, and dirname. This is the reason for those elements to be available from inside the module when coding. Each module is just the body of a function. ES6 supports modules with `export function...` and `import * from ...`.

Node caches in memory all requires, if exporting an object, we'll be getting a reference to the same object in different requires. Very powerfull for making db or lib wrappers with only one initialization.

Node automaticaly looks for .js and index.js files in the require dir

Functions and variables not exported in the module won't be exposed (Revealing Module Pattern)

```js
// v1
module.exports = function () {}
// v2
module.exports.foo = function () {}
// v3
function Foo() {
  this.foo = function(){}
}
module.exports = new Foo()
// v4
function Foo() {
  this.foo = function(){}
}
module.exports = Foo
// v5
function foo() {}
module.exports = { foo }

const foov1 = require('./v1')
foov1()
const foov2 = require('./v2')
foov2.foo()
const {foo} = require('./v2')
foo()
const foo = require('./v2').foo
foo()
const foov3 = require('./v3')
foov3.foo()
const Foo = require('./v4')
const foov4 = new Foo()
foov4.foo()
const foov5 = require('./v5')
foov5.foo()
const {foo} = require('./v5')
foo()
const foo = require('./v5').foo
foo()
```

exports can be used in modules if we mutate it and not replace it (equal). If we equal exports to an object we break the reference and it won't be returned when requiring that module. It is preferable to user `module.exports`

Native modules are also imported with require. Node will first look for native and installed modules when importing.

```js
require('crypto')
require('util')
```
