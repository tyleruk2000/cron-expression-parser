const clear = require('clear');
const cronParser = require('./src/CronParser')

var args = process.argv.slice(2)

//Clear the screen before we do anything
clear();

cronParser.parseExpersion(args)

