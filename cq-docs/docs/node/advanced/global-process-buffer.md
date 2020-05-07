---
id: global-process-buffer
title: Global, process, buffer
sidebar_label: Global, process, buffer
---

### Global

`global` is the only true global variable in node. We should avoid using it.

### Process

The process object is a brigde between the node app and the running environment. It is an instance of Event Emitter. So we can listen for example to the process.on('exit') event executed when the event loop has nothing else to process or `process.exit` is manually executed. Be careful when listening to the `process.uncaughtException` event since that will prevent node from exiting the process unless you manually execute `process.exit` on that listener.

- `process.versions` gets all the node modules versions.

- `process.env` provides the user environment. If we modify process.env we are not modifying the original user environment. process.env should only be accessed through a centralized config file.

### Buffer

`Buffer` is a chunk of memory outside of the v8 heap. When reading we have to specify an encoding. Buffers are created with alloc, allocUnsafe, from. allocUnsafe won't fill the memory space and that means there can be some old data there. Buffers are useful for reading files or any binary data access.

When converting a buffer to a string always use StringDecoder since it handles multi byte characters and inclomplete multi byte characters.

Buffers hold binary data. It is a fundamental part of node, they are global so no need to require anything. It defaults to utf8 encoding. Buffers can be converted to strings, jsons... It behaves like an array to access its data. ES6 can deal with binary data with typed arrays.

Node uses buffers for loading contents of files through the fs native module. Carefull with readFileSync because it blocks the loop, it is recommended to use it just for loading config data at the init of the application. readFile accepts a callback and won't block the event loop, it's an error-first callback.

Error-first callback -> callback that returns an error as the first paramenter, or null if success.
