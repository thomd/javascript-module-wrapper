var assert = require('assert');
var math = require('../lib/math');

describe('CommonJS Module', function(){
    it('should print pi defined in module math.js', function(){
        assert.equal(3.1415926, math.pi);
    })
})
