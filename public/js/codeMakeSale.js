const modalMakeSale = new bootstrap.Modal(document.getElementById('modalMakeSaler'))

const on = (element, event, selector, handler) =>{
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnMakeSale', e => {
    const fila = e.target.parentNode.parentNode
    id_make_sale_product.value = fila.children[0].innerHTML
  //  id_product_make_sale.value = fila.children[1].innerHTML;
  name_product_make_sale.value = fila.children[2].innerHTML;
  presentation_make_sale.value = fila.children[4].innerHTML + " "+ fila.children[3].innerHTML;
  price_product_make_sale.value = "$" + fila.children[5].innerHTML;
    modalMakeSale.show()
})