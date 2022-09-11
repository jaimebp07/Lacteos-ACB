const Bill = require('../model/bill');
const Product = require('../model/product');

module.exports.addBill = (req, res) => {
    let json_bill = req.body.imput_bill_invisible;
    
    if(json_bill.length > 0){
        let objBill = JSON.parse(json_bill);
        let date = new Date().toISOString().split('T')[0];
        let hour = new Date().toString().split(' ')[4];

        console.log("objBill  "+ objBill)
        const bill = new Bill({
            bill_name_client: objBill.name_client,
            bill_name_seller: objBill.name_client,
            bill_date_purchase: date,
            bill_hour_purchase: hour,
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
    } else {
        console.log("FACTURA VACIA")
    }
    
}