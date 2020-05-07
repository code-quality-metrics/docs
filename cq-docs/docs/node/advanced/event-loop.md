---
id: event-loop
title: The event loop
sidebar_label: The event loop
---

## Concurrency and event loop

The event loop. Slow i/o operations are handled by events and callbacks. i/o operations can be memory, disk, network or other processes. Disk and network resources are the most expensive operations. Node minimizes waiting time. Node does not use threads, it's single threaded.

The event loop picks events from the event queue and pushes their callbacks to the call stack. It starts when a script is started and exited when no more callbacks or process.exit is called.

V8 has a call stack and a heap. The heap is where objects are stored in memory. Both are part of the runtime engine not node itself. The loop is provided by the libuv.

The call stack is a stack of functions. Only one stack. Only one function executed at a time. When executing a script every time we step into a function it is pushed into the stack and everytime we return from a function it gets popped out of the stack. It is printed on errors.

Queue is a queue of events to be executed. When executing we move the callback to the stack. settimeout is provided by node and node executes a timer out of the runtime freeing the call stack to process more items. When the timer finishes node sends the callback to the event queue. Then the event loop will take events form the queue and add them to the stack when the stack is empty.

When the timer delay is 0, it works in the same way as setImmediate. The callbacks will be executed after we are done with the stack. setImmediate can take precedende over settimeout with 0. process.nexttick is not part of the event loop, callbacks are processed after the current operation completes and before the event loop continues. process.nexttick can be used when returning a custom error in a async function asyncronussly.

## Asynchrony and synchrony

JS is synchronous, one line at a time. Asynchrony in node allows other modules like libuv to process tasks from the event loop. When Node.js needs to perform an I/O operation instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back from libuv.
