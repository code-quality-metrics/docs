---
id: events
title: Events and inheritance
sidebar_label: Events and inheritance
---
## Events and inheritance

System events (libuv, c library) come from the c++ core and represent events that are not part of JS, closer to the machine. Custom events are JS related and belong to the Event Emitter. Sometimes events from libuv trigger custom JS events.

The node event emitter basically pushes listeners to the event prop array and executes them when the event is emitted.

Apply or call a function changes the scope of the function. Overwrite 'this'.

```js
obj.doSomething()
obj.doSomething.call({}, param) // The parameter of call overwrites 'this'
obj.doSomething.apply({}, []) // The parameter of call overwrites 'this'
```

Overwriting this helps when dealing with object inheritance.

```js
function Foo() {
  this.foo = 'foo'
}
function Bar() {
  Foo.call(this) // making .call here will make this.foo available here
  this.bar = 'bar'
}
const barObj = util.inherits(Bar, Foo) // inherits comes from util native module

```

ES6 introduces classes to improve OOP in js, it is just syntactic sugar that still uses prototypical inheritance in js.

```js
class Foo {
  constructor() {
    this.foo = 'foo'
  }
}
class Bar extends Foo {
  constructor() {
    super() // super will make this.foo available here
    this.bar = 'bar'
  }
}
```