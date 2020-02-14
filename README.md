# Cron Expression Parser
Take an input of a cron expersion and a command. The application will then output a tabe showing the details of the cron expersion

---
# Application Usage

## Prerequisites

 
## Basic usage

Below is an example of parsing the cron expersion `*/15 0 1,15 * 1-5` to run the command `/usr/bin/find`. 

**Any * should be escaped to stop the shell adding the a list of files in the folder into the arguments**. 

Alternativly if you are using bash you can run the command `set -f` to disables expansions

```bash
npm start */15 0 1,15 \* 1-5 /usr/bin/find
```

## To Run Unit Tests
```bash
npm start
```

---
# Suported Fromats
```
*    *    *    *    *
┬    ┬    ┬    ┬    ┬
│    │    │    │    |
│    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    └───── month (1 - 12)
│    │    └────────── day of month (1 - 31)
│    └─────────────── hour (0 - 23)
└──────────────────── minute (0 - 59)
```

### Time Tracker
|date|time-spent|
|---|---|
|13/02/20|1.5hr|
|14/02/20|1.5hr|