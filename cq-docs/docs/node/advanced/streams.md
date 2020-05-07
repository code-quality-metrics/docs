---
id: streams
title: Streams
sidebar_label: Streams
---

Many built in modules implement streams. Collections of data that might not be always available and dont have to fit in memory. It allows to avoid buffering big chunks of data in memory.

```js
const src = fs.createReadStream('./big.file');
src.pipe(res);
```

Readable, writable, duplex, transform

readable is the origin, writable is the destination, duplex are both and transform is a duplex that transforms the data. All streams are instances of event emitter. pipe can be chained (over duplexes).

readable can be paused or flowing (pull/push). In flowing mode we have to listen to events of that data. resume() and pause() methods switch between the states.

The heap of v8 can be affected when reading large files and not using streams. Streams inherit EventEmitter so the EventEmitter methods are available in all streams. Streams can be readeable, writable, duplex... Streams are abstracts so it should be inherited and not used directly. fs provides createReadStream and createWriteStream.

Readable streams have a pipe function to pipe data to a given destination.