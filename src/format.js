
const db = require('../database')

const stock = data => {
    const product = {
        Name: data.sku.names.short,
        Sku: data.sku.skuId,
        Price:  `$${data.sku.price.currentPrice}`,
        Image: `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/${data.sku.skuId.substr(0,4)}/${data.sku.skuId}_sa.jpg;maxHeight=1000;maxWidth=1000`,
        Status: data.sku.buttonState.buttonState,
        Url: `https://bestbuy.com${data.sku.url}`
    }
    db.store(product)
}


module.exports = {stock}