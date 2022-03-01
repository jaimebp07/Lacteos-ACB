const Product = require('../model/product');
const Inventory = require('../model/inventory');

module.exports.register_product = (req, res) => {
    return res.render('register_product')
}

module.exports.add = (req, res) => {
    const product = new Product({
        id_product: req.body.id_product,
        name_product: req.body.name_product,
        unit_of_measurement: req.body.unit_of_measurement,
        amount: req.body.amount_product,
        price: req.body.price_product,
        stocks: 0
    })
    /*//comentado domingo 27
    let inventory = new Inventory({
        id_product_inventory: product._id,
        stocks: 0
    })*/
    /*inventory.save(function(error, inventory){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el producto'
            })
        }
    })*/
    product.save(function(error, product){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el producto'
            })
        }
        res.redirect('/product_management');
    })
}

module.exports.mostrar_products = (req, res) => {
    Product.find({}, (error, products) => {
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los productos'
            })
        }
       return res.render('product_management', {products:products})
    })
}

module.exports.delete_product = (req, res) => {
    const id = req.params.id;
    /*Inventory.find({id_product_inventory: id}, (error, product_inventory) => {
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los productos'
            })
        }
        Inventory.findByIdAndDelete(product_inventory, (error, inve) => {
            if(error){
                return res.status(500).json({
                    message: 'Error al eliminar el inventario'
                })
            }
        })
    })*/

    Product.findByIdAndDelete(id, (error, user) => {
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar el producto'
            })
        }
        res.redirect('/product_management');
    } )
}

module.exports.edit_product = (req, res) => {
    const id = req.body.id_edit_product
    const id_product = req.body.id_product_edit
    const name_product = req.body.name_product_edit
    const unit_of_measurement = req.body.unit_of_measurement_edit
    const amount = parseInt(req.body.amount_product_edit);
    const price = parseInt(req.body.price_product_edit);
    Product.findByIdAndUpdate(id, {id_product, name_product, unit_of_measurement, amount, price}, (error, product) => {
        if(error) {
            return res.status(500).json({
                message: 'Error editando el producto'
            })
        }
        res.redirect('/product_management')
    })
}

module.exports.make_sale = (req, res) => {
    Product.find({}, (error, products) => {
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los productos'
            })
        }
        //return res.render('make_sale', {products:products})
       return res.render('bill', {products:products})
    })
}

