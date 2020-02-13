var assert = require('assert');
const Expersion = require('../src/Expersion')

describe('Expersion', function(){
    
    describe('CronParser.minuteConstraint', function(){
        
        it ("contrains low should be accurate", function(){
            assert.equal(Expersion.minuteConstraint.low, 0);
        });

        it ("contrains high should be accurate", function(){
            assert.equal(Expersion.minuteConstraint.high, 59);
        });

    });

    describe('CronParser.hourConstraint', function(){

        it ("contrains low should be accurate", function(){
            assert.equal(Expersion.hourConstraint.low, 0);
        });

        it ("contrains high should be accurate", function(){
            assert.equal(Expersion.hourConstraint.high, 23);
        });

    });

    describe('CronParser.domConstraint', function(){

        it ("contrains low should be accurate", function(){
            assert.equal(Expersion.domConstraint.low, 1);
        });

        it ("contrains high should be accurate", function(){
            assert.equal(Expersion.domConstraint.high, 31);
        });

    });

    describe('CronParser.monthConstraint', function(){

        it ("contrains low should be accurate", function(){
            assert.equal(Expersion.monthConstraint.low, 1);
        });

        it ("contrains high should be accurate", function(){
            assert.equal(Expersion.monthConstraint.high, 12);
        });

    });

    describe('CronParser.dowConstraint', function(){

        it ("contrains low should be accurate", function(){
            assert.equal(Expersion.dowConstraint.low, 0);
        });

        it ("contrains high should be accurate", function(){
            assert.equal(Expersion.dowConstraint.high, 7);
        });

    });

    describe('CronExpression.validateExpersion', function(){

        it ("should return true on valid chars in exerpsion", function(){
            assert.true(Expersion.validateExpersion("*/15"));
            assert.true(Expersion.validateExpersion("0"));
            assert.true(Expersion.validateExpersion("1,15"));
            assert.true(Expersion.validateExpersion("*"));
            assert.true(Expersion.validateExpersion("1-5"));
        });

        it ("should return false on invalud cars in experion", function(){
            assert.false(Expersion.validateExpersion("1to5"));
            assert.false(Expersion.validateExpersion("a"));
            assert.false(Expersion.validateExpersion(" "));
        });

    });
    


});