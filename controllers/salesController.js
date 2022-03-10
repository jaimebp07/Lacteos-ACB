//const ProductSold = require('../model/productSale');
const Product = require('../model/product');

//const formDetalle = document.getElementById("formDetalle");
/*const input_producto = document.getElementById("input_producto");
const input_descripcion = document.getElementById("input_descripcion");
const input_precio = document.getElementById("input_precio");
const input_cantidad = document.getElementById("input_cantidad");
const input_descuento = document.getElementById("input_descuento");
const tableBody = document.getElementById("tableBody")
let detailArrangement = [];*/

/*
module.exports.add_to_sale = (req, res) => {
    console.log("Agrego producto a la venta");
    const productSold = new ProductSold({
        id_product: req.body.id_product,
        name_product: req.body.name_product,
        unit_of_measurement: req.body.unit_of_measurement,
        amount_product: req.body.amount_product,
        price_product: req.body.price_product
    })
    productSold.save(function(error, productSold){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el producto'
            })
        }
        //Rebisar
       // res.redirect('/see_sale');
    })
}*/

module.exports.see_sale = (req, res) => {
    //let date = new Date().toDateString();
    const id = req.params.id
    let product_select = Product.findById(id);
   console.log("salesController"+product_select.name_product);

    Product.find({}, (error, products) => {
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los productos'
            })
        }
       return res.render('bill', {products:products})
    })
}