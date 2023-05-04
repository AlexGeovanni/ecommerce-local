import { clientService } from "../cliente_service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id')
const formulario = document.querySelector('[data-formActualizar]');

const detalleInfo= async()=>{
    if(id==null){
        alert('algo salio mal')
    }
    const nombre = formulario.querySelector('[data-nombre]')
    const color = formulario.querySelector('[data-color]')
    const almacenamieto = document.getElementsByName('memoria');
    const precio = formulario.querySelector('[data-precio]');
    const iphone = await clientService.datelleProducto(id);
    
    verficaColores(iphone.titulo)
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

formulario.addEventListener('submit',async(e)=>{
    e.preventDefault();
    let radioValor = 0;
    let nombreimg =''
    const nombre = formulario.querySelector('[data-nombre]').value;
    const color = formulario.querySelector('[data-color]').value;
    const almacenamieto = document.getElementsByName('memoria');
    const precio = formulario.querySelector('[data-precio]').value;
    nombreimg = nombre.toLowerCase();
    nombreimg = nombreimg.replace(/ /g, "");
    const url =`../../img/iphones/${nombreimg}_${color.toLowerCase()}.jpg`
    for (const radio of almacenamieto) {
        if (radio.checked) {
            radioValor  = radio.value
        }
    }
    await clientService.actualizarProducto(id,url,nombre,color,radioValor,precio)
        window.location.href='../../dashboard.html'
    // clientService.actualizarProducto(id,url,nombre,color,radioValor,precio).then(()=>{
    //     window.location.href='../../dashboard.html'
    // })
})



function verficaColores (color){
    const listaColor = document.querySelector('#ncolor');
    const colores={
        'Iphone 14 PRO MAX':['Black','Gold','Silver'],
        'Iphone 14':['Blue','Midnight','Purple','Yellow','Red'],
        'Iphone 13 PRO MAX':['Green','Midnight'],
        'Iphone SE': ['Red','Midnight','white']
    }
    for (const key in colores) {
        if(key == color){
            listaColor.innerHTML='';
            for (const iterator of colores[key]) {
                const option = document.createElement('option');
                option.value = iterator;
                listaColor.appendChild(option);
            }
        }
    }
}