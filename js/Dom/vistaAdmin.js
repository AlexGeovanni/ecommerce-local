const edit_Eliminar = document.querySelector('[data-edit_elimina]')
const nuevoPrdto = document.querySelector('[data-nuevo]');

const listaProductos= document.querySelector('[data-listas]');
const registroNuevo = document.querySelector('[data-registroNuevo ]')
edit_Eliminar.addEventListener('click',()=>{
    listaProductos.style.display='block';
    registroNuevo.style.display='none'
    Listacontrol();
});

nuevoPrdto.addEventListener('click',()=>{
    listaProductos.style.display='none';
    registroNuevo.style.display='block'
    Listacontrol();
});


const Listacontrol =()=>{
    edit_Eliminar.classList.toggle('activo');
    nuevoPrdto.classList.toggle('activo');
}
