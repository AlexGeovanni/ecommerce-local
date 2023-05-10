import { clientService } from "../cliente_service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id')
const formularioCelular = document.querySelector('[data-formActualizarCel]');
const formularioComputadora = document.querySelector('[data-formActualizarCompu]');


const detalleInfo= async()=>{
    if(id==null){
        // alert('algo salio mal')
    }
    
    const Producto = await clientService.datelleProducto(id);

    if(Producto.producto === "celular"){ActualizarCelular(Producto)
    }else if(Producto.producto === "computadora"){ActualizarComputadora(Producto)}
}

detalleInfo();


const ActualizarCelular=({titulo,color,gb,precio,marca,producto})=>{
    formularioComputadora.classList.remove('form');
    formularioCelular.classList.add("formm")

    const nombreForm = formularioCelular.querySelector('[data-nombre]')
    const colorForm = formularioCelular.querySelector('[data-color]')
    const memoria = document.getElementsByName('memoria');
    const precioForm = formularioCelular.querySelector('[data-precio]');


    verficaColores(titulo)
    nombreForm.value = titulo;
    colorForm.value = color;
    precioForm.value = precio;

    for (const radio of memoria) {
        if(radio.value === gb ){
            radio.checked = true;
        }
    }

    formularioCelular.addEventListener('submit',async(e)=>{
        e.preventDefault();

        let radioValor = 0;
        let nombreimg =''

        const nombre = nombreForm.value;
        const color = colorForm.value;
        const precio = precioForm.value;
        const almacenamieto = document.getElementsByName('memoria');

        nombreimg = nombre.toLowerCase();
        nombreimg = nombreimg.replace(/ /g, "");
        const url =`./img/iphones/${nombreimg}_${color.toLowerCase()}.jpg`

        for (const radio of almacenamieto) {
            if (radio.checked) {
                radioValor  = radio.value
            }
        }
        await clientService.actualizarProducto(id,url,nombre,color,radioValor,precio,marca,producto)
            window.location.href='../../pages/dashboard.html'
        // clientService.actualizarProducto(id,url,nombre,color,radioValor,precio).then(()=>{
        //     window.location.href='../../dashboard.html'
        // })
    })
}



const ActualizarComputadora =({titulo,color,gb,gbssd,precio,marca,procesador,ram,producto})=>{
    formularioCelular.classList.remove("formm")
    formularioComputadora.classList.add('formm');

    const modeloForm = formularioComputadora.querySelector('[data-modelo')
    const colorForm  = formularioComputadora.querySelector('[data-colores]')
    const precioForm = formularioComputadora.querySelector('[data-precioCompu]')
    const procesadorForm = formularioComputadora.querySelector('[data-procesador]')
    const marcaForm = formularioComputadora.querySelector('[data-marca]')

    const almacenamientoSSD = document.getElementsByName('memoriaSSD');
    const almacenamientoIT = document.getElementsByName('memoriaIT');
    const Ram = document.getElementsByName('memoriaRAM');

    marcaForm.value = marca;
    procesadorForm.value = procesador;
    colorForm.value = color;
    precioForm.value = precio;
    modeloForm.value = titulo;
    verficaModelo(marca);

    for (const radio of almacenamientoIT) {
        if(radio.value === gb){
            radio.checked = true
        }
        
    }

    for (const radio of almacenamientoSSD) {
        if(radio.value === gbssd){
            radio.checked = true
        }
    }

    for (const radio of Ram) {
        if(radio.value=== ram){
            radio.checked = true
        }
    }


    formularioComputadora.addEventListener('submit',async(e)=>{
        e.preventDefault();

        let memoriaSSD =0;
        let memoriaIT =0;
        let memoriaRam =0;

        const modelo = modeloForm.value;
        const color  = colorForm.value;
        const precio = precioForm.value;
        const procesador = procesadorForm.value;
        const marca = marcaForm.value;

        const almacenamientoSSD = document.getElementsByName('memoriaSSD');
        const almacenamientoIT = document.getElementsByName('memoriaIT');
        const Ram = document.getElementsByName('memoriaRAM');

        for (const radio of almacenamientoSSD) {
            if(radio.checked){
                memoriaSSD = radio.value;
            }
        }
        for (const radio of almacenamientoIT) {
            if(radio.checked){
                memoriaIT = radio.value;
            }
        }
        for (const radio of Ram) {
            if(radio.checked){
                memoriaRam = radio.value;
            }
        }

        const modelos = modelo.replace(/ /g, "")
        const url =`./img/laptos/${marca}_${modelos}.webp`

        await clientService.actualizarProductoCompu(id,url,modelo,color,memoriaIT,memoriaSSD,precio,marca,procesador,memoriaRam,producto)
            window.location.href='../../pages/dashboard.html'
    })

}







// funcion es para mostrar los colores disponibles de cada modelo de celular
function verficaColores (color){
    const listaColor = document.querySelector('#ncolor');
    const colores={
        'Iphone 14 PRO MAX':['Black','Gold','Silver'],
        'Iphone 14':['Blue','Midnight','Purple','Yellow','Red'],
        'Iphone 13 PRO MAX':['Green','Midnight'],
        'Iphone SE': ['Red','Midnight','white']
    }
    for (const i in colores) {
        if(i == color){
            listaColor.innerHTML='';
            for (const iterator of colores[i]) {
                const option = document.createElement('option');
                option.value = iterator;
                listaColor.appendChild(option);
            }
        }
    }
}

// funcion es para mostrar los modelos disponibles de cada modelo de laptops
function verficaModelo (marca){
    const listaModelo = document.querySelector('#nmodelo');
    const modelos={
        'Hp':['14-dq2502','15-ef2518'],
        'Asus':['VivoBook X515EA-BQ2563W','L410MA-Cel4G128Gb-P3'],
        'MSI':['A11MU 15.6','SWORD 15 A11UD-1248US','Stealth 15M'],
        'Dell': ['Inspiron 3501','Latitude 7280 - 12.5']
    }
    for (const i in modelos) {
        if(i == marca.trim()){
            listaModelo.innerHTML='';
            for (const iterator of modelos[i]) {
                const option = document.createElement('option');
                option.value = iterator;
                listaModelo.appendChild(option);
            }
        }
    }
}