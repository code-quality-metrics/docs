---
id: clusters
title: Clusters and child processes
sidebar_label: Clusters and child processes
---

### Multiprocess for node

Multiprocess is the only scalability for node. For scaling an app we can clone the app, decompose its functionalities (microservice), split the app into instances (horizontal partitioning).

child_process module can run system commands in child processes. For creating child processes we can use spawn, fork, exec, execfile. They have sync versions.

```js
const { spawn } = require('child_process');

const child = spawn('find', ['.', '-type', 'f']);

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});

child.on('exit', function (code, signal) {
  console.log(`child process exited with code ${code}, signal ${signal}`);
});
```

the spawn function returns a child process instance that implements the event emitter so we can register handlers for events like 'exit', disconnect, error, message (the child process uses process.send), close... Every child process has attached streams stdin, stdout, stderror, when those are close the process is closed and the close event is emitted. Those streams can have registered listeners to their events. The spawn function streams the data returned from the command.

child processes streams can be piped to share data among processes.

exec method creates a shell and buffers all the data returned from the command.

```js
const { exec } = require('child_process');

exec('find . -type f | wc -l', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});
```

execfile executes a file and does not use a shell.

fork allows to exchange messages with the child process with process.send or child.send and listening to the message event in the process.

### Clusters

enable load balancing and forks the application process as many time as cpu cores. Helps to implement the clonning strategy to one machine. the cluster module is native. A master process decides (round robin by default) which worker process takes the request. 1 master, multiple workers.

create a cluster file that if it's master will call fork to create as many processes as cpus in the machine and if it's a child will require the server file with the server configuration. When forking the cluster file it will be run in worker mode with the isMaster flag set to false.

```js
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) { // or !isWorker
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i<cpus; i++) {
    cluster.fork();
  }
} else {
  require('./server');
}
```

Each process has its own event loop, queue, call stack...

The master cluster can access its workers through cluster.workers (object) and send messages with worker.send(). In the workers (server.js) we can get the received messages by listening to process.on 'message'.

The master is notified whenever a child exits listening to the 'exit' envent. It can generate new workers when they crash. It can also kill or disconnect workers with those methods.

```js
  cluster.on('exit', (worker, code, signal) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.id} crashed. ` +
                  'Starting a new worker...');
      cluster.fork();
    }
  });
```

The exitedAfterDisconnect indicates if the worker was disconnected by the master. We can use singals to let the master know that it has to disconnect the workers. In linux, signals sent to processes can be listened to as an event on process. process.on('SIGUR2'...

pm2 can be used to simplify cluster management.

State should be shared between workers (redis, db). You can also use sticky load balancing (if your load balance allows it), keep records on the master of which user talked with which worker, latter requests by that user will go to the same worker.
