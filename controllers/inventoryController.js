/*const Inventory = require('../model/inventory');*/
const Product = require('../model/product');

module.exports.show_products_inventory = (req, res) => {
    Product.find({}, (error, products) => {
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los productos'
            })
        }
       return res.render('inventory_management', {products:products})
    })
}

module.exports.add_amount_inventory = (req, res) => {
    const id = req.body.id_inventory
    const suma = parseInt(req.body.product_stock_inventory) + parseInt(req.body.add_product_stock_inventory)
    const stocks =  suma;
    Product.findByIdAndUpdate(id, {stocks}, (error, product) => {
        if(error) {
            return res.status(500).json({
                message: 'Error editando el usuario'
            })
        }
        res.redirect('/inventory_management')
    })
  
}

module.exports.sub_amount_inventory = (req, res) => {
    const id = req.body.id_inventory
    const suma = parseInt(req.body.product_stock_inventory_sub) - parseInt(req.body.sub_product_stock_inventory)
    const stocks =  suma;
    Product.findByIdAndUpdate(id, {stocks}, (error, user) => {
        if(error) {
            return res.status(500).json({
                message: 'Error editando el usuario'
            })
        }
        res.redirect('/inventory_management')
    })
}