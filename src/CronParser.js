const chalk = require('chalk');
var clui = require('clui'),
    Line = clui.Line;

const Expersion = require('./Expersion')

async function parseExpersion(cronArray){
    const cronExpersion =   cronArray.slice(0,5);
    const command   =   cronArray.slice(5,6);

    testExpersion(cronExpersion);
    
    const minuteValues  =   parseMinute(    cronArray[0]);
    const hourValues    =   parseHour(      cronArray[1]);
    const domValues     =   parseDom(       cronArray[2]);
    const monthValues   =   parseMonth(     cronArray[3]);
    const dowValues     =   parseDow(       cronArray[4]);

    await printLine('minute', minuteValues);
    await printLine('hour', hourValues);
    await printLine('day of month', domValues);
    await printLine('month', monthValues);
    await printLine('day of week', dowValues);
    await printLine('command', command[0]);

}

async function printLine(name, values){
    new Line()
    .column(chalk.green(name), 20)
    .column(values, 40)
    .fill()
    .output();

}

async function testExpersion(cronExpersion){

    if (cronExpersion.length == 0){
        console.log(chalk.red.bold("No expersion found!"));
        console.log("usage: npm start [cron expresion] [command]");
        process.exit();
    }

    for (let index = 0; index < cronExpersion.length; index++) {

        const expersion = cronExpersion[index];
        const expersionValid = await Expersion.validateExpersion(expersion);
        
        if (!expersionValid){
            console.log(chalk.red.bold("Invalid Cron Expersion: " + expersion));
            process.exit();
        }
    }
    
}

function processExpersion(cronExpression, low, high, name){

    if (Expersion.singleNumber.test(cronExpression)){ 
        //0
        if (checkInLimits(low, high, [cronExpression])){
            return cronExpression;
        }else{
            displayError(name, cronExpression);
        }
        
    }else if (Expersion.containsComma.test(cronExpression)){
         //1,15
        const values = cronExpression.split(',');

        if (checkInLimits(low, high, values)){
            return values.join(" ");
        }else{
            displayError(name, cronExpression);
        }

    }else if (Expersion.containsDash.test(cronExpression)){
        //1-5
        const values = cronExpression.split('-');

        if (checkInLimits(low, high, values)){
            return loopThoughNumbers(values[0], parseInt(values[1])+1, 1);
        }else{
            displayError(name, cronExpression);
        }
    
    }else if (Expersion.containsSingleStar.test(cronExpression)){
        //*
        return loopThoughNumbers(low, parseInt(high)+1, 1);
    
    }else if (Expersion.startsWithStar.test(cronExpression)){
        //*/15
        var plusBy = parseInt(/(\d*)$/g.exec(cronExpression)[1]);

        if (checkInLimits(low, high, [plusBy])){
            return loopThoughNumbers(low, high, plusBy);
        }else{
            displayError(name, cronExpression);
        }

    }

    displayError(name, cronExpression);
}

function loopThoughNumbers(low,high,plusBy){
    var values = [];
    var low = parseInt(low);
    var high = parseInt(high);
    var plusBy = parseInt(plusBy);

    var nextNumber = low;
    while (nextNumber < high){
        values.push(nextNumber);
        nextNumber = nextNumber + plusBy;
    }

    return values.join(' ');
}

function checkInLimits(low,high,values){

    for (let index = 0; index < values.length; index++) {
        if (parseInt(values[index]) < low){
            return false;
        }
        if (parseInt(values[index]) > high){
            return false;
        }
    }

    return true;
}

function displayError(name, cronExpression){
    console.log(chalk.red.bold("Invalid " + name + " Expersion: " + cronExpression));
    process.exit();
}


function parseMinute(cronExpression){
    return processExpersion(
        cronExpression, 
        Expersion.minuteConstraint.low,
        Expersion.minuteConstraint.high, 
        'Minute');
}

function parseHour(cronExpression){
    return processExpersion(
        cronExpression, 
        Expersion.hourConstraint.low,
        Expersion.hourConstraint.high, 
        'Hour');
}

function parseDom(cronExpression){
    return processExpersion(
        cronExpression, 
        Expersion.domConstraint.low,
        Expersion.domConstraint.high, 
        'Day Of Month');
}

function parseMonth(cronExpression){
    return processExpersion(
        cronExpression, 
        Expersion.monthConstraint.low,
        Expersion.monthConstraint.high, 
        'Month');
}

function parseDow(cronExpression){
    return processExpersion(
        cronExpression, 
        Expersion.dowConstraint.low,
        Expersion.dowConstraint.high, 
        'Day Of Week');
}

module.exports = {parseExpersion,parseMinute,parseHour,parseDom,parseMonth,parseDow,checkInLimits}