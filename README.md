# Cron Expression Parser
Take an input of a cron expersion and command. The application will then output a tabe showing the details of the cron expersion

---
# Application Usage

## Basic usage

An example of parsing the cron expersion `*/15 0 1,15 * 1-5` to run the command `/usr/bin/find`

```bash
npm start */15 0 1,15 * 1-5 /usr/bin/find
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