## JavaScript Modules

This is a little research project about using javascript modules.

A universal module wrapper is wrapping your javascript library so it can work as

1. CommonJS module for Node.js and Mozilla Rhino
2. AMD module like RequireJS
3. Plain JavaScript attached to the global object 

### Universal Module Wrapper

    (function(global, factory){
        if (typeof define === "function" && define.amd) define(factory);        // AMD
        else if (typeof module === "object") module.exports = factory();        // CommonJS 
        else global.myModule = factory();                                       // global context
    }(this, function(){
        "use strict";
        return function(...) { ... }                                            // the module
    }));

### Load module using AMD

    <script src="//requirejs.org/docs/release/2.1.0/minified/require.js"></script>
    <script>
      require(['module.js'], function(){ 
        myModule(); 
      })
    </script>

### Load module using CommonJS 

    var myModule = require('./module');
    myModules();

### Load module using the global context

    <script src="module.js"></script>
    <script>
      myModule();
    </script>

## Test

Tests are done with [Mocha](http://visionmedia.github.io/mocha/) using
[Zombie](http://zombie.labnotes.org/).

Run all tests for AMD, CommonJS and Plain Javascript with

    npm install
    make test





