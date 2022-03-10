const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema ({
    id_product_inventory: String,
    stocks: Number
}, {versionkey:false})

module.exports = mongoose.model('inventories', inventorySchema);