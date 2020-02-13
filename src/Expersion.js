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

CronExpression.standardValidCharacters = /^[\d|/|*|\-|,]+$/;
CronExpression.validateExpersion = {
    
}

module.exports = CronExpression;