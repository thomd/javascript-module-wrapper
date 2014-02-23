(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    }
    else if (typeof module === "object") {
        module.exports = factory();
    }
    else {
        global.math = factory();
    }
}(this, function () {
    "use strict";
    return {
        pi: 3.1415926
    };
}));
