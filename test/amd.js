var http = require('http');
var connect = require('connect');
var Browser = require('zombie');
var assert = require('assert');
var math = require('../lib/math');

describe('AMD Module', function(){
    before(function(done){
        this.server = http.createServer(connect().use(connect.static(__dirname + '/..')));
        this.server.listen(9876);
        this.browser = new Browser({site: 'http://localhost:9876'});
        this.browser.visit('/index_amd.html').then(done, done);
    });
    it('should render value of pi in browser', function(){
        assert.equal('3.1415926', this.browser.text('div'));
    });
    after(function(){
        this.server.close();
    });
});


