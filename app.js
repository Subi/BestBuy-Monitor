const request =  require('./src/request');
const config = require('./config/setting.json');
const chalk = require('chalk');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bestbuy' , {useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify: false})
.then(() => console.log(chalk.green("Mongo DB is connected")))
.then(() => 
(timer = () => {
    console.log(chalk.blue("Monitor started"))
    setInterval(() => {
        console.log(chalk.blue("Monitoring.."))
        config.Skus.forEach(async sku => {
            await request.get(sku)
        })
    } , config.Interval)
})())
.catch(err => console.log(chalk.red(err)))



