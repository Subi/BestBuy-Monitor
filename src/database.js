const Product = require('../src/model/Product')
const notification = require('../src/notifcation')
const chalk = require("chalk")


const store = product => {
    const item =  new Product({name: product.Name,sku: product.Sku,price: product.Price,image: product.Image,status: product.Status,url: product.Url})
    if(!item){
        console.log(chalk.red(item))
        return
    }
    Product.findOne({name: product.name} , (err , foundProduct) => {
        if(err){
            console.log(chalk.red(`Error occured finding product in database ${err}`))
        }
        if(!foundProduct){
            item.save()
            if(item.status != "SOLD_OUT" || item.status != "CHECK_STORES"){
                notification.send(product)
            }
        }
        checkforRestock(item)
    })
}

const checkforRestock = item =>{
    Product.findOneAndUpdate({name: item.name , status: { $ne:item.status } } , {$set: {Status: item.status}} , {new: true} , (err , updatedProduct) => {
        if(err) return
        if(!updatedProduct) return
        console.log(chalk.red(`${updatedProduct.name} item status has been updated`))
        if(item.status != "SOLD_OUT" || item.status != "CHECK_STORES"){
            notification.send(item)
        }
    } )
}


module.exports = {store}