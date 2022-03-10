/*import {LocalStorage} from 'node-localstorage' 
*/
const modalTableProducts = new bootstrap.Modal(document.getElementById('modal_sales'));

const formDetalle = document.getElementById("formDetalle");
const input_producto = document.getElementById("input_producto");
const input_descripcion = document.getElementById("input_descripcion");
const input_precio = document.getElementById("input_precio");
const input_precio_total = document.getElementById("input_precio_total");
const input_cantidad = document.getElementById("input_cantidad");
const tableBody = document.getElementById("tableBody");
const btnGuardar = document.getElementById("save_the_purchase");
const formCabecera = document.getElementById("formCabecera");
const btn_search_product = document.getElementById("btn_search_product");
const btn_buy_this_product = document.getElementById("btn_buy_this_product");
const input_total_compra = document.getElementById("input_total_compra")
const input_descuento_bill = document.getElementById("input_descuento_bill")
const name_client = document.getElementById("name_client");
const document_client = document.getElementById("document_client");
const input_total_compra_descuento = document.getElementById("input_total_compra_descuento");
const imput_bill_invisible = document.getElementById("imput_bill_invisible");

/*
var localStorage = new LocalStorage('./scratch');
localStorage.setItem('Name', 'Manish Mandal') 
*/

let detailArrangement = [];
let bill;
let billsArrangement = [];

const calculateTotalPriceBill = () =>{
    var totalPriceBill = 0;
    var totalPriceBill = 0;
    var discount = input_descuento_bill.value;

    detailArrangement.forEach((detail) => {
        totalPriceBill = totalPriceBill + detail.total_price;
    });

    totalPriceBillDiscount = totalPriceBill - ((totalPriceBill/100)*(+discount));
    input_total_compra_descuento.value = totalPriceBillDiscount;

    input_total_compra.value = "$" +totalPriceBill;
}

const fillBill = () => {
    let objBill = {
        name_client: name_client.value,
        document_client: document_client.value,
        price_total: input_total_compra.value,
        discount_rate: input_descuento_bill.value,
        price_discount: input_total_compra_descuento.value,
        products_client: detailArrangement
    };
  
    if(objBill.name_client.length == 0){
        alert('NO HA INGRESADO EL NOMBRE DEL CLIENTE');
    } else {
        if(objBill.document_client.length == 0){
            alert('NO HA INGRESADO EL DOCUMENTO DEL CLIENTE');
        } else {
            if(objBill.products_client.length == 0){
                alert('NO HA SELECCIONADO NINGUN PRODUCTO');
            } else {
              console.log("CONSOLA DE NAVEGADOR, objBill: "+objBill);
              console.log(JSON.stringify(objBill));
              imput_bill_invisible.value = JSON.stringify(objBill);
            }
        }
    }
}

const redrawTable = () => {
    tableBody.innerHTML = "";
        detailArrangement.forEach((detail) => {
            let fila = document.createElement("tr");
        fila.innerHTML = `<td>${detail.id}</td>
                            <td>${detail.product}</td>
                            <td>${detail.description}</td>
                            <td>${detail.amount}</td>
                            <td>${detail.price}</td>
                            <td>${detail.total_price}</td>`;
        let tdDelete = document.createElement("td");
        let btnDelete = document.createElement("button");
        btnDelete.classList.add("btn", "btn-danger");
        btnDelete.innerText = "Eliminar";
        btnDelete.onclick = () => {
            deleteDetailById(detail.id);
        }
        tdDelete.appendChild(btnDelete);
        fila.appendChild(tdDelete);
        tableBody.appendChild(fila);
    });
    calculateTotalPriceBill();
    fillBill();
}

const deleteDetailById = (id) => {
    detailArrangement = detailArrangement.filter((detail) => {
        if(id.toUpperCase() !== detail.id.toUpperCase()){
            return detail;
        }
    });
    redrawTable();
}

const addDetail = (detailObject) =>{
    detailArrangement.push(detailObject);
    redrawTable(); 
}

const productIsAdd = (id_detail) =>{
    var isAdd = false;
    detailArrangement.forEach((detail) => {
        if (id_detail.toUpperCase() == detail.id.toUpperCase()) {
            isAdd = true;
        }
    });
    return isAdd;
}

formDetalle.onsubmit = (e) =>{
    e.preventDefault();
    const detailObject = {
        id:input_id.value,
        product: input_producto.value,
        description:input_descripcion.value,
        price:input_precio.value,
        stock:input_disponibles.value,
        amount:input_cantidad.value,
        total_price:0
    }

    formDetalle.reset();

    var regex = /(\d+)/g;
    price_only_number = detailObject.price.match(regex);
    detailObject.total_price = parseInt(price_only_number)*parseInt(detailObject.amount);

    if(detailObject.product.length == 0){
        alert('SELECCIONE UN PRODUCTO');
    } else {
        if(+detailObject.stock < +detailObject.amount){
            alert("NO TEMEMOS TODOS ESOS PRODUCTOS");
        } else {
            if(detailObject.amount.length == 0){
                alert("INDIQUE LA CANTIDAD QUE DESEA COMPRAR");
            } else {
                if(productIsAdd(detailObject.id)){
                    alert("YA HA REALIZADO LA COMPRA DE ESTE PRODUCTO");
                }else{
                    addDetail(detailObject)
                }
            }
        }
    }
}

const on = (element, event, selector, handler) =>{
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btn_make_sale', e => {
    const fila = e.target.parentNode.parentNode
    input_id.value =  fila.children[1].innerHTML;
    input_producto.value = fila.children[2].innerHTML;
    input_descripcion.value = fila.children[4].innerHTML+ " " + fila.children[3].innerHTML;
    input_precio.value = "$ "+ fila.children[5].innerHTML;
    input_disponibles.value = fila.children[6].innerHTML;
  // modalTableProducts.hide();
});



const calculateTotal = () => {
    const amount_ = +input_cantidad.value;
    var regex = /(\d+)/g;
    var price_only_number = input_precio.value.match(regex);
    const price_unit_ = parseInt(price_only_number);
    const price_total_ = price_unit_ * amount_;
    input_precio_total.value = "$ "+price_total_.toFixed(2);
}

input_cantidad.onchange = () => {
    calculateTotal();
}

btn_search_product.onmouseup = () => {
    formDetalle.reset();
}

input_descuento_bill.onmouseup = () => {
    calculateTotalPriceBill();
}

