const contentForm = document.querySelector('[ data-contentModal]');
const iconUsuario = document.querySelector('[data-usuario]');
const cierrarModal = document.querySelectorAll('[data-closeModal]')

const entrar = document.querySelector("[data-entrar]");
const registro = document.querySelector("[data-registrar]");
const iniciaForm = document.querySelector("[data-iniciaForm]");
const registraForm = document.querySelector("[data-registraForm]");
//muestra el modal al hacer click sobre el icon de usuario
iconUsuario.addEventListener('click',()=>{
    modal()
});

//cierra el modal
cierrarModal.forEach((element)=>{
    element.addEventListener('click',()=>{
        modal()
    })
})

//muestra o quita el modal dependiendo si tiene o no la clase
export const modal=()=>{
    contentForm.classList.toggle('show__modal')
}

/* -------------------------------------------------- */

// cambiar el form
entrar.addEventListener("click",modales)
registro.addEventListener("click",modales);

function modales(){
    registraForm.classList.toggle("close__form");
    iniciaForm.classList.toggle("close__form");
}
