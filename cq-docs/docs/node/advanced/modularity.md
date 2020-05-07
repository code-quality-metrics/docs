---
id: modularity
title: Modularity
sidebar_label: Modularity
---

### Modularity in node

`require.resolve` does not load the module, it can be used to check if a package is available or not.

node caches every required module for any other requests. The cache is managed in an array inside require `require.cache`. Automaticaly gets index.js inside directories.

module.exports contains what will be exported to other modules.

require can also get jsons (JSON.parse) files and c++ addons compiled into .node files (process.dlopen). `node-gyp` is used for compiling files.

We can use the exports object to export properties but we cannot replace the exports object directly, for that we use the module.exports. Exports is a variable reference to module.exports.

Scoping modules in node is done by wrapping the module in a function with five arguments. exports, require, module, __filename, __dirname. It keeps the top level variables scoped to that module. exports is a reference to module.exports
