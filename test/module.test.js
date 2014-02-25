var assert = require('assert');

describe('Universal Module Wrapper', function(){

    describe('using CommonJS Module', function(){
        var math = require('../lib/math');
        it('should print value of pi', function(){
            assert.equal(3.1415926, math.pi);
        });
    });

    describe('on Client side', function(){

        before(function(){
            var http = require('http'), connect = require('connect'), Browser = require('zombie');
            this.server = http.createServer(connect().use(connect.static(__dirname + '/..')));
            this.server.listen(9876);
            this.browser = new Browser({site: 'http://localhost:9876'});
        });

        describe('using AMD', function(){
            before(function(done){
                this.browser.visit('/index_amd.html').then(done, done);
            });
            it('should render value of pi in browser', function(){
                assert.equal('3.1415926', this.browser.text('div'));
            });
        });

        describe('using Global Context', function(){
            before(function(done){
                this.browser.visit('/index_global.html').then(done, done);
            });
            it('should render value of pi in browser', function(){
                assert.equal('3.1415926', this.browser.text('div'));
            });
        });

        after(function(){
            this.server.close();
        });
    });
});



