const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    id_product_sale: String,
    name_product_sale: String,
    amount_product_sale: Number,
    presentation_product_sale: String,
    unit_price_product_sale: Number,
    total_price_product_sale: Number
}, {versionkey:false})

module.exports = mongoose.model('Sold_products', userSchema);