const chalk = require('chalk');

const Expersion = require('./Expersion')

function parseExpersion(cronArray){
    const cronExpersion =   cronArray.slice(0,5);
    const command   =   cronArray.slice(5,6);

    testExpersion(cronExpersion);
    
    const minuteValues  =   parseMinute(    cronArray[0])
    const hourValues    =   parseHour(      cronArray[1])
    const domValues     =   parseDom(       cronArray[2])
    const monthValues   =   parseMonth(     cronArray[3])
    const dowValues     =   parseDow(       cronArray[4])

}

async function testExpersion(cronExpersion){

    for (let index = 0; index < cronExpersion.length; index++) {

        const expersion = cronExpersion[index]
        const expersionValid = await Expersion.validateExpersion(expersion)
        
        if (!expersionValid){
            console.log(chalk.red.bold("Invalid Cron Expersion: " + expersion));
            process.exit()
        }
      }
    
}

function parseMinute(cronExpression){

    return ""
}

function parseHour(cronExpression){

    return ""
}

function parseDom(cronExpression){

    return ""
}

function parseMonth(cronExpression){

    return ""
}

function parseDow(cronExpression){

    return ""
}

module.exports = {parseExpersion,parseMinute,parseHour,parseDom,parseMonth,parseDow}