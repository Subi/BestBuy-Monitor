const axios = require('axios');
const format = require('./format');
const chalk = require('chalk')

async function get(sku){
       try{
        const {data} =  await axios({
            method: "GET",
            url: `https://www.bestbuy.com/api/3.0/priceBlocks?skus=${sku}`,
            headers: {
                "User-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
            }
        })  
        console.log(chalk.green(`Watching Product ${data[0].sku.names.short}`))
        format.stock(data[0])
       }catch(e){
           console.log(chalk.red(`Error requesting ${sku} endpoint` , e))
       }

}
module.exports = {get}