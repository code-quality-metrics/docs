---
id: repl
title: Node REPL
sidebar_label: REPL
---

Node.js comes with virtual environment called REPL (aka Node shell). REPL stands for Read-Eval-Print-Loop. The default repl can be imported as a module and by calling the `start` function it can be extended.

- --harmony flag - for using staged features of the V8. There are specific harmony flags for each in progress feature of V8.

- -p evaluates and prints the results of a string. `node -p "os.cpus()"` prints the processors node sees.

- node cli provides autocomplete buy tabbing on any object or variable.

- v8.getHeapStatistics() prints heap data to the console

- underscore '_' prints the last computed value
