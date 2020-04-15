const request =  require('./src/request');
const config = require('./config/setting.json');
const chalk = require('chalk');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bestbuy' , {useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify: false})
.then(() => console.log(chalk.green("Mongo DB is connected")))
.then(() => 
(timer = () => {
    console.log(chalk.blue("Monitor is starting up!"))
    setInterval(() => {
        checkConfig()
    } , config.Interval)
})())
.catch(err => console.log(chalk.red(err)))


const checkConfig = () =>  {
    if(config.Discord.Webhook == ""){
        console.log(chalk.red("Make sure to insert a discord webhook in the setting.json file"))
        process.exit(1)
    }
    if(config.Skus.length != 1){
        console.log(chalk.red("Make sure to insert a sku into the \" skus array [] \" "))
        process.exit(1)
    }
    console.log(chalk.blue("Monitoring.."))
    start()
}


const start = () => {
    config.Skus.forEach(async sku => {
        await request.get(sku)
    })
}

