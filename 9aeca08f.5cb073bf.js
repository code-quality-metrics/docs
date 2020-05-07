(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{171:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return a})),o.d(n,"metadata",(function(){return s})),o.d(n,"rightToc",(function(){return u})),o.d(n,"default",(function(){return l}));var t=o(1),r=o(9),i=(o(0),o(184)),a={id:"require",title:"Require and modules",sidebar_label:"Require and modules"},s={id:"node/require",title:"Require and modules",description:"When using require, nodejs wraps the code that is inside the module into a function expression, invokes it and returns whatever is inside the exports property of the module. That function expression accepts this parameters: exports, require, module, filename, and dirname. This is the reason for those elements to be available from inside the module when coding. Each module is just the body of a function. ES6 supports modules with `export function...` and `import * from ...`.",source:"@site/docs/node/require.md",permalink:"/docs-and-blog/docs/node/require",sidebar_label:"Require and modules",sidebar:"someSidebar",previous:{title:"Basics of web server",permalink:"/docs-and-blog/docs/node/web-server"},next:{title:"Events and inheritance",permalink:"/docs-and-blog/docs/node/events"}},u=[],c={rightToc:u};function l(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When using require, nodejs wraps the code that is inside the module into a function expression, invokes it and returns whatever is inside the exports property of the module. That function expression accepts this parameters: exports, require, module, filename, and dirname. This is the reason for those elements to be available from inside the module when coding. Each module is just the body of a function. ES6 supports modules with ",Object(i.b)("inlineCode",{parentName:"p"},"export function...")," and ",Object(i.b)("inlineCode",{parentName:"p"},"import * from ..."),"."),Object(i.b)("p",null,"Node caches in memory all requires, if exporting an object, we'll be getting a reference to the same object in different requires. Very powerfull for making db or lib wrappers with only one initialization."),Object(i.b)("p",null,"Node automaticaly looks for .js and index.js files in the require dir"),Object(i.b)("p",null,"Functions and variables not exported in the module won't be exposed (Revealing Module Pattern)"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// v1\nmodule.exports = function () {}\n// v2\nmodule.exports.foo = function () {}\n// v3\nfunction Foo() {\n  this.foo = function(){}\n}\nmodule.exports = new Foo()\n// v4\nfunction Foo() {\n  this.foo = function(){}\n}\nmodule.exports = Foo\n// v5\nfunction foo() {}\nmodule.exports = { foo }\n\nconst foov1 = require('./v1')\nfoov1()\nconst foov2 = require('./v2')\nfoov2.foo()\nconst {foo} = require('./v2')\nfoo()\nconst foo = require('./v2').foo\nfoo()\nconst foov3 = require('./v3')\nfoov3.foo()\nconst Foo = require('./v4')\nconst foov4 = new Foo()\nfoov4.foo()\nconst foov5 = require('./v5')\nfoov5.foo()\nconst {foo} = require('./v5')\nfoo()\nconst foo = require('./v5').foo\nfoo()\n")),Object(i.b)("p",null,"exports can be used in modules if we mutate it and not replace it (equal). If we equal exports to an object we break the reference and it won't be returned when requiring that module. It is preferable to user ",Object(i.b)("inlineCode",{parentName:"p"},"module.exports")),Object(i.b)("p",null,"Native modules are also imported with require. Node will first look for native and installed modules when importing."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"require('crypto')\nrequire('util')\n")))}l.isMDXComponent=!0},184:function(e,n,o){"use strict";o.d(n,"a",(function(){return d})),o.d(n,"b",(function(){return m}));var t=o(0),r=o.n(t);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function u(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):s({},n,{},e)),o},d=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=Object(t.forwardRef)((function(e,n){var o=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(o),f=t,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return o?r.a.createElement(m,s({ref:n},c,{components:o})):r.a.createElement(m,s({ref:n},c))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=o.length,a=new Array(i);a[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:t,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}f.displayName="MDXCreateElement"}}]);