---
id: udp
title: UDP sockets
sidebar_label: UDP sockets
---

In node we can use the native module dgram. With its own methods for creating and running the server.

```js
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.bind(PORT, HOST);
```

The message event is called every time the client posts a message with the message and remote information.

```js
server.on('message', (msg, rinfo) => {
  console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});
```

For creating clients we use the same module and initialization but run `.send`.
