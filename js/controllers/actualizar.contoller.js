import { clientService } from "../cliente_service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id')
const formulario = document.querySelector('[data-formActualizar]')

const detalleInfo= async()=>{
    if(id==null){
        alert('algo salio mal')
    }
    const nombre = formulario.querySelector('[data-nombre]')
    const color = formulario.querySelector('[data-color]')
    const almacenamieto = document.getElementsByName('memoria');
    const precio = formulario.querySelector('[data-precio]');

    const iphone = await clientService.datelleProducto(id);
    nombre.value = iphone.titulo;
    color.value = iphone.color;
    precio.value = iphone.precio;
    for (const radio of almacenamieto) {
        if(radio.value == iphone.gb ){
            radio.checked = true;
        }
    }
}

detalleInfo();

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    let radioValor = 0;
    const img = '../../img/iphones/iphone14_pro_max_gold.jpg'
    const nombre = formulario.querySelector('[data-nombre]').value;
    const color = formulario.querySelector('[data-color]').value;
    const almacenamieto = document.getElementsByName('memoria');
    const precio = formulario.querySelector('[data-precio]').value;
    for (const radio of almacenamieto) {
        if (radio.checked) {
            radioValor  = radio.value
        }
    }
    console.log(radioValor)
    clientService.actualizarProducto(id,img,nombre,color,radioValor,precio).then(()=>{
        window.location.href='../../dashboard.html'
    })
})