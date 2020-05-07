(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(1),r=n(9),a=(n(0),n(184)),i={id:"intro",title:"Intro to Node docs",sidebar_label:"Intro"},s={id:"node/intro",title:"Intro to Node docs",description:"Exploring and explaining Node JS and Express best practices and architecture designs.",source:"@site/docs/node/intro.md",permalink:"/docs-and-blog/docs/node/intro",sidebar_label:"Intro",sidebar:"someSidebar",next:{title:"Basics of web server",permalink:"/docs-and-blog/docs/node/web-server"}},c=[{value:"Node principles",id:"node-principles",children:[]},{value:"The event loop",id:"the-event-loop",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Exploring and explaining Node JS and Express best practices and architecture designs."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Go through the different sections on the sidebar or jump into the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"advanced/clusters"}),"advanced")," or ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"advanced/crypto"}),"cryptography")," sections to get a more in depth view of node. Don't forget to check the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../../blog/tags/node"}),"node articles")," of our blog.")),Object(a.b)("p",null,"Nodejs is a C++ program with v8 embedded. It takes v8 and adds all the necessary features for making a server technology with javascript.\nNodejs is written in C++ - V8 is written in C++. V8 (Google, open source) converts js code into machine code based on the ECMAScript standard. V8 can be embedded into any C++ application and features can be added on top of v8.\nNode also has js wrappers to C++ functionality to make it easier to use, it also has utilities being both a framework and a code library."),Object(a.b)("p",null,"Node adds to js:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"modules"),Object(a.b)("li",{parentName:"ul"},"file and data base management"),Object(a.b)("li",{parentName:"ul"},"communication over the internet"),Object(a.b)("li",{parentName:"ul"},"ability to accept requests and send response"),Object(a.b)("li",{parentName:"ul"},"a way to deal with time consuming tasks")),Object(a.b)("h2",{id:"node-principles"},"Node principles"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Event driven\nProgramming paradigm in which the program execution is determined by events. Each function executes an event. Node provides the event listener that awaits for calls."),Object(a.b)("li",{parentName:"ul"},"Non-blocking I/O\nWhen Node.js needs to perform an I/O operation instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back. This allows Node.js to handle thousands of concurrent connections."),Object(a.b)("li",{parentName:"ul"},"Single process\nNode.js app is run in a single process, without creating a new thread for every request. Node sends requests in an event loop and goes on to handle the next request in the call stack."),Object(a.b)("li",{parentName:"ul"},"Small core\nNode has a simple and small core leaving the bulk of features to npm packages."),Object(a.b)("li",{parentName:"ul"},"High ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://code-quality-metrics.github.io/docs-and-blog/blog/modularDesign"}),"modularity"),"\nThe Node.js way, in fact, involves extreme levels of reusability. Applications are composed of a high number of small, well-focused dependencies.")),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.dev/introduction-to-nodejs"}),"https://nodejs.dev/introduction-to-nodejs")),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://simpleprogrammer.com/top-4-javascript-concepts-a-node-js-beginner-must-know/"}),"https://simpleprogrammer.com/top-4-javascript-concepts-a-node-js-beginner-must-know/")),Object(a.b)("h2",{id:"the-event-loop"},"The event loop"),Object(a.b)("p",null,"One instance, one thread. The event loop doesn\u2019t get generated instantly as soon as we run our program. In fact, it only runs once the whole program has been executed. Node looks at its inner collection of pending OS tasks and selects the next one on each tick. The event loop is composed of a series of phases, each with its own specific tasks, all processed in a circular repetitive way"),Object(a.b)("p",null,"Node provides multithreading through libraries like fs module. They run outside the node thread."),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://blog.logrocket.com/a-complete-guide-to-the-node-js-event-loop/"}),"https://blog.logrocket.com/a-complete-guide-to-the-node-js-event-loop/")),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=PNa9OMajw9w"}),"https://www.youtube.com/watch?v=PNa9OMajw9w")),Object(a.b)("p",null,"How to break it"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"long tasks.\nNode.js server allows one operation to monopolize all resources in the process. If it is too long other tasks won`t take any thread space. This happens with long sync methods. Don't use fs.readFileSy.\nLong tasks could also happen due to unlimitting or not validating inputs.\nTry to keep high traffic endpoints from being too heavy.\n",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://blog.scottnonnenberg.com/breaking-the-node-js-event-loop/"}),"https://blog.scottnonnenberg.com/breaking-the-node-js-event-loop/"))),Object(a.b)("p",null,"CommonJS modules: An agreed upon standard for how code modules should be structured."))}p.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return n?r.a.createElement(h,s({ref:t},l,{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);