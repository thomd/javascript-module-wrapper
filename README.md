## JavaScript Modules

This is a little research project about using javascript modules.

A universal module wrapper is wrapping your javascript library so it can work as

1. **[CommonJS](http://www.commonjs.org/) module** (Implemented by [Node.js](http://wiki.thomd.net/index.php?title=Node.js), 
   [Rhino](http://wiki.thomd.net/index.php?title=Javascript_engines#Rhino), 
   [MongoDB](http://wiki.thomd.net/index.php?title=MongoDB) or
   [CouchDB](http://wiki.thomd.net/index.php?title=CouchDB)
   among others)
2. **[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) module** (mplemented 
   by [Require.js](http://wiki.thomd.net/index.php?title=Javascript_Loader#RequireJS) 
   or [curl](https://github.com/cujojs/curl) among others)
3. **Plain JavaScript** (attached to the `global` object)

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
    myModule();

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
    npm test





