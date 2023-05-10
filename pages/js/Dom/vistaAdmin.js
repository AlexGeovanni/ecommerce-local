
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

// Nuevo producto elige que producto agrega

const inputCel = document.getElementById("cel");
const inputCompu = document.getElementById("compu");

const formCel = document.getElementById("celular");
const formCompu = document.getElementById("computadora");

inputCel.addEventListener('click',()=>{
    formCel.classList.add('form');
    formCompu.classList.remove('form')
})




inputCompu.addEventListener('click',()=>{
    formCompu.classList.add('form');
    formCel.classList.remove('form')

})


// const Tipo=()=>{
    
//     if(inputCel.checked == true){
        
//     }
//     if(inputCompu.checked == true){
//         formCelular.classList.remove('form')
//         formComputadora.classList.add('form')
//     }
// }