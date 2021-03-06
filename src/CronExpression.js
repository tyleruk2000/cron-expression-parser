function CronExpression(){
 
}

CronExpression.minuteConstraint = {
    low: 0,
    high: 59
}

CronExpression.hourConstraint = {
    low: 0,
    high: 23
}

CronExpression.domConstraint = {
    low: 1,
    high: 31
}

CronExpression.monthConstraint = {
    low: 1,
    high: 12
}

CronExpression.dowConstraint = {
    low: 0,
    high: 7
}

var patt = /e/;
CronExpression.standardValidCharacters = /^[\d|/|*|\-|,]+$/;
CronExpression.singleNumber = /^[\d]+$/;
CronExpression.containsComma = /.*,.*/;
CronExpression.containsDash = /.*\-.*/;
CronExpression.containsSingleStar = /^\*$/;
CronExpression.startsWithStar = /^\*\/.*/;

CronExpression.validateExpersion = function (cronExpersion){

    return CronExpression.standardValidCharacters.test(cronExpersion);
}

module.exports = CronExpression;