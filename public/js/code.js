const modalUser = new bootstrap.Modal(document.getElementById('modalUser'))

const on = (element, event, selector, handler) =>{
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEdit', e => {
    const fila = e.target.parentNode.parentNode
    id_edit.value = fila.children[0].innerHTML
    document_edit.value = fila.children[1].innerHTML
    apellidos_edit.value = fila.children[2].innerHTML
    nombres_edit.value = fila.children[3].innerHTML
    email_edit.value = fila.children[4].innerHTML
    //rol_edit.value = fila.children[5].innerHTML
    modalUser.show()
})