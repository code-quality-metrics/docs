---
id: intro
title: Intro to Node docs
sidebar_label: Intro
---

Exploring and explaining Node JS and Express best practices and architecture designs.

> Go through the different sections on the sidebar or jump into the [advanced](advanced/clusters) or [cryptography](advanced/crypto) sections to get a more in depth view of node. Don't forget to check the [node articles](../../blog/tags/node) of our blog.

## What is Node?

Nodejs is a C++ program with v8 embedded. It takes v8 and adds all the necessary features for making a server technology with javascript.
Nodejs is written in C++ - V8 is written in C++. V8 (Google, open source) converts js code into machine code based on the ECMAScript standard. V8 can be embedded into any C++ application and features can be added on top of v8.
Node also has js wrappers to C++ functionality to make it easier to use, it also has utilities being both a framework and a code library.

Node adds to js:

- modules
- file and data base management
- communication over the internet
- ability to accept requests and send response
- a way to deal with time consuming tasks

## Node principles

- Event driven
  Programming paradigm in which the program execution is determined by events. Each function executes an event. Node provides the event listener that awaits for calls.
- Non-blocking I/O
  When Node.js needs to perform an I/O operation instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back. This allows Node.js to handle thousands of concurrent connections.
- Single process
  Node.js app is run in a single process, without creating a new thread for every request. Node sends requests in an event loop and goes on to handle the next request in the call stack.
- Small core
  Node has a simple and small core leaving the bulk of features to npm packages.
- High [modularity](https://code-quality-metrics.github.io/docs-and-blog/blog/modularDesign)
  The Node.js way, in fact, involves extreme levels of reusability. Applications are composed of a high number of small, well-focused dependencies.

<https://nodejs.dev/introduction-to-nodejs>

<https://simpleprogrammer.com/top-4-javascript-concepts-a-node-js-beginner-must-know/>

## The event loop

One instance, one thread. The event loop doesn’t get generated instantly as soon as we run our program. In fact, it only runs once the whole program has been executed. Node looks at its inner collection of pending OS tasks and selects the next one on each tick. The event loop is composed of a series of phases, each with its own specific tasks, all processed in a circular repetitive way

Node provides multithreading through libraries like fs module. They run outside the node thread.

<https://blog.logrocket.com/a-complete-guide-to-the-node-js-event-loop/>

<https://www.youtube.com/watch?v=PNa9OMajw9w>

How to break it

- long tasks.
  Node.js server allows one operation to monopolize all resources in the process. If it is too long other tasks won`t take any thread space. This happens with long sync methods. Don't use fs.readFileSy.
  Long tasks could also happen due to unlimitting or not validating inputs.
  Try to keep high traffic endpoints from being too heavy.
  <https://blog.scottnonnenberg.com/breaking-the-node-js-event-loop/>

CommonJS modules: An agreed upon standard for how code modules should be structured.
