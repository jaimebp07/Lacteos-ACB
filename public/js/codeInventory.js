const modalInventoryAdd = new bootstrap.Modal(document.getElementById('modalInventoryAdd'))
const modalInventorySub = new bootstrap.Modal(document.getElementById('modalInventorySub'))

const on = (element, event, selector, handler) =>{
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btn_add_inventory', e => {
    const fila = e.target.parentNode.parentNode
    id_inventory.value = fila.children[0].innerHTML
    id_product_inventory.value = fila.children[0].innerHTML;
  id_product_inventory.value = fila.children[1].innerHTML;
  name_product_inventory.value = fila.children[2].innerHTML;
  description_product_inventory.value = fila.children[3].innerHTML;
  price_product_inventory.value = fila.children[4].innerHTML;  
  product_stock_inventory.value = fila.children[5].innerHTML;
  modalInventoryAdd.show();
})

on(document, 'click', '.btn_sub_inventory', e => {
    const fila = e.target.parentNode.parentNode
    id_inventory_sub.value = fila.children[0].innerHTML
    id_product_inventory_sub.value = fila.children[0].innerHTML;
  id_product_inventory_sub.value = fila.children[1].innerHTML;
  name_product_inventory_sub.value = fila.children[2].innerHTML;
  description_product_inventory_sub.value = fila.children[3].innerHTML;
  price_product_inventory_sub.value = fila.children[4].innerHTML;  
  product_stock_inventory_sub.value = fila.children[5].innerHTML;
  modalInventorySub.show();
})