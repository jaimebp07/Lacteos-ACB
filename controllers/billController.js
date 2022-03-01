const Bill = require('../model/bill');
const Product = require('../model/product');

module.exports.addBill = (req, res) => {
    
    let objBill = JSON.parse(req.body.imput_bill_invisible);

    const bill = new Bill({
        bill_name_client: objBill.name_client,
    bill_document_client: objBill.document_client,
    bill_price_total: objBill.price_total,
    bill_discount_rate: objBill.discount_rate,
    bill_price_discount: objBill.price_discount,
    bill_products: objBill.products_client
    })
    bill.save(function(error, bill){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el producto'
            })
        }
       res.redirect('/make_sale');
    })
    
}