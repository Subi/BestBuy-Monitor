const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    sku:  String,
    price: String,
    image: String,
    status: String,
    url:  String
})

const product = mongoose.model('product' , productSchema)

module.exports = product