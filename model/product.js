const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema ({
    id_product: String,
    name_product: String,
    unit_of_measurement: String,
    amount: String,
    price: String,
    stocks: Number
}, {versionkey:false})

module.exports = mongoose.model('productos', productSchema);