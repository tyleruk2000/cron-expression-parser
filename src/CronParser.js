const chalk = require('chalk');

const Expersion = require('./Expersion')

function parseExpersion(cronArray){
    const cronExpersion =   cronArray.slice(0,5);
    const command   =   cronArray.slice(5,6);

    testExpersion(cronExpersion);
    
    
}

function testExpersion(cronExpersion){

    cronExpersion.forEach(element => {

        if (!Expersion.validateExpersion(element)){

            console.log(chalk.red.bold("Invalid Cron Expersion: " + element));
            process.exit()

        }
    });
}

function parseMinute(cronExpression){
    
    console.log(expersion.minuteConstraint.low)


    return ""
}

module.exports = parseExpersion