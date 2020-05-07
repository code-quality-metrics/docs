---
id: net
title: The net module
sidebar_label: Net server
---

### Creating a net server

```js
const server = require('net').createServer();
```

Now the server is an instance of event emitter and we can listen `on` connections. There, we get a socket. The socket implements a duplex stream interface so that we can write to clients and read from clients. The reading handlers will get the data as buffers.

```js
server.on('connection', socket => {
  console.log('Client connected');
  socket.write('Welcome new client!\n');

  socket.on('data', data => {
    console.log('data is:', data);
    socket.write('data is: ');
    socket.write(data);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});
```

We also have to listen to a port to run the server

```js
server.listen(8000, () => console.log('Server bound'));
```

For making a basic chat we can read data from the sockets and write that data to every connected client. For this we should track all sockets and handle connections and disconnections.

### dns module

node provides a dns native module. lookup can translate urls into IPs, it uses libuv the rest of the methods uses the network. reverse is the opposite of lookup.
