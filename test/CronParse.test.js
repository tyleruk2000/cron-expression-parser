var assert = require('assert');
const cronParser = require('../src/CronParser')

describe('CronParser', function(){
    
    describe('CronParser.checkInLimits()', function(){
        it ("should return true if the number's is within limits", function(){
            assert.equal(cronParser.checkInLimits(0,15,["0,15"]), true);
        });
    });

    describe('CronParser.checkInLimits()', function(){
        it ("should return flase if the number's is out of limits", function(){
            assert.equal(cronParser.checkInLimits(0,15,["50,100"]), false);
        });
    });

    describe('CronParser.parseMinute()', function(){
        it ("should return the minutes used in a cron expresion", function(){
            assert.equal(cronParser.parseMinute("*/15"), "0 15 30 45");
        });
    });

    describe('CronParser.parseHour()', function(){
        it ("should return the hour used in a cron expresion", function(){
            assert.equal(cronParser.parseMinute("0"), "0");
        });
    });

    describe('CronParser.parseDom()', function(){
        it ("should return the day of month used in a cron expresion", function(){
            assert.equal(cronParser.parseMinute("1,15"), "1 15");
        });
    });

    describe('CronParser.parseMonth()', function(){
        it ("should return the month used in a cron expresion", function(){
            assert.equal(cronParser.parseMonth("*"), "1 2 3 4 5 6 7 8 9 10 11 12");
        });
    });

    describe('CronParser.parseDow()', function(){
        it ("should return the day of week used in a cron expresion", function(){
            assert.equal(cronParser.parseMinute("1-5"), "1 2 3 4 5");
        });
    });

});