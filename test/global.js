var http = require('http');
var connect = require('connect');
var Browser = require('zombie');
var assert = require('assert');
var math = require('../lib/math');

describe('oldschool Javascript Module', function(){
    before(function(done){
        connect.createServer(connect.static(__dirname + '../')).listen(9876);
        this.browser = new Browser();
        this.browser.visit('http://localhost:9876/index_global.html').then(done, done);
    });
    it('should print pi defined in module math.js', function(){
        assert.equal(3.14145926, browser.text());
    });
});

