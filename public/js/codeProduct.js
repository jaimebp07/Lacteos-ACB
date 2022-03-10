const modalProduct = new bootstrap.Modal(
  document.getElementById("modalProduct")
);

const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

on(document, "click", ".btnEditProduct", (e) => {
  const fila = e.target.parentNode.parentNode;
  console.log(fila.children[0].innerHTML);
  id_edit_product.value = fila.children[0].innerHTML;
  id_product_edit.value = fila.children[1].innerHTML;
  name_product_edit.value = fila.children[2].innerHTML;
  //unit_of_measurement_edit.value = fila.children[3].innerHTML
  amount_product_edit.value = fila.children[4].innerHTML;
  price_product_edit.value = fila.children[5].innerHTML;
  modalProduct.show();
});
