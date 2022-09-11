const mongoose = require('mongoose')
const Schema = mongoose.Schema

const billSchema = new Schema ({
    bill_name_client: String,
    bill_name_seller: String,
    bill_date_purchase: String,
    bill_hour_purchase: String,
    bill_document_client: String,
    bill_price_total: String,
    bill_discount_rate: String,
    bill_price_discount: String,
    bill_products: Object
}, {versionkey:false})

module.exports = mongoose.model('bills', billSchema);