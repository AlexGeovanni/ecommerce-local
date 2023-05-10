import { clientService } from "../cliente_service.js"
export class dashboard{
    constructor(img,titulo,color,gb,precio,id){
        this.img =img
        this.titulo=titulo
        this.color =color
        this.almacenamiento = gb
        this.precio = precio
        this.id = id;
    }
    dashboardProducto(){
        const contentDashboard = document.querySelector('#productoDash')
        const div= document.createElement('div');
        div.classList.add('producto');
        div.innerHTML=`
        <div class="producto__img">
            <img src="${this.img}" alt="${this.titulo}">
            </div>
            <h2 class="producto__nombre">${this.titulo}</h2>
            <h2 class="producto__color">${this.color}</h2>
            <h2 class="producto__gb">${this.almacenamiento}</h2>
            <h2 class="producto__precio">$${this.precio}</h2>
            <div class="producto__acciones">
            <a  href="./actualizar_producto.html?id=${this.id}" class="editar">Editar <i class="fa-sharp fa-solid fa-pen-to-square"></i></a>
            <button id="${this.id}" class="eliminar" data-elimina>Eliminar <i class="fa-sharp fa-solid fa-trash"></i></button>
        `
        contentDashboard.appendChild(div)
    }
    elimina(id){
        clientService.eliminarProducto(id).then(respuesta=>{
            window.location.href="./dashboard.html"
        }).catch(Error=>{
            console.log(Error)
        })
    }
}

// muestra los productos existentes
clientService.listaProductos().then((data)=>{
    data.forEach(({id,img,titulo,color,gb,precio}) => {
        const productDashboard = new dashboard(img,titulo,color,gb,precio,id);
        productDashboard.dashboardProducto();
    });
});



// capturamos los valores del form para luego enviarlo y se cree el nuevo producto

//este es el formulario de celular
    const formularioCel = document.querySelector('[data-formCel]');
    formularioCel.addEventListener('submit',async (evento)=>{
        evento.preventDefault();
        let radioValor =0;
        let nombreimg='';
        const nombre = document.querySelector('[data-nombre]').value
        const color  = document.querySelector('[data-color]').value
        const precio = document.querySelector('[data-precio]').value;
        const almacenamieto = document.getElementsByName('memoria');
        const marca = "Apple"
        const producto = "celular"

        nombreimg = nombre.toLowerCase();
        nombreimg = nombreimg.replace(/ /g, "");
        const url =`./img/iphones/${nombreimg}_${color.toLowerCase()}.jpg`
        
        for (const radio of almacenamieto) {
            if (radio.checked) {
                radioValor  = radio.value
            }
        }
        //await clientService.crearProducto(url,nombre,color,radioValor,precio);
        //window.location.href="./dashboard.html"
        clientService.crearProducto(url,nombre,color,radioValor,precio,marca,producto).then(respuesta=>{
            window.location.href="./dashboard.html";
        }).catch(Error=>{
            console.log(Error)
        })
    });


//este es el formulario de laptops
    const formularioCompu = document.querySelector('[data-formCompu]');
    formularioCompu.addEventListener('submit',async (evento)=>{
        evento.preventDefault();
        let memoriaSSD =0;
        let memoriaIT =0;
        let memoriaRam =0;

        const modelo = document.querySelector('[data-modelo').value;
        const color  = document.querySelector('[data-colores]').value;
        const precio = document.querySelector('[data-precioCompu]').value;
        const procesador = document.querySelector('[data-procesador]').value;
        const marca = document.querySelector('[data-marca]').value;
        const almacenamientoSSD = document.getElementsByName('memoriaSSD');
        const almacenamientoIT = document.getElementsByName('memoriaIT');
        const Ram = document.getElementsByName('memoriaRAM');
        const producto = "computadora"

        const modelos = modelo.replace(/ /g, "")

        const url =`./img/laptos/${marca}_${modelos}.webp`
        
        for (const radio of almacenamientoSSD) {
            if (radio.checked) {
                memoriaSSD  = radio.value
            }
        }
        for (const radio of almacenamientoIT) {
            if (radio.checked) {
                memoriaIT = radio.value
            }
        }
        for (const radio of Ram) {
            if (radio.checked) {
                memoriaRam  = radio.value
            }
        }
        //await clientService.crearProducto(url,nombre,color,memoriaSSD,precio);
        //window.location.href="./dashboard.html"
        clientService.crearProductoCompu(url,modelo,color,memoriaIT,memoriaSSD,precio,marca,procesador,memoriaRam,producto).then(respuesta=>{
            window.location.href="./dashboard.html";
        }).catch(Error=>{
            console.log(Error)
        })
    });


// manda a llamar el modulo de eliminar pasando como parametro el id de producto
const contentDashboard = document.querySelector('#productoDash');
contentDashboard.addEventListener('click',(e)=>{
    const elimina = new dashboard;
    e.target.id? elimina.elimina(e.target.id):false
})


// lista de colores solo para celulares
const nombre = document.querySelector('[data-nombre]');
nombre.addEventListener('blur',()=>{
    verficaColores(nombre.value)
})

function verficaColores (color){
    const listaColor = document.querySelector('#ncolor');
    const colores={
        'Iphone 14 PRO MAX':['Black','Gold','Silver'],
        'Iphone 14':['Blue','Midnight','Purple','Yellow','Red'],
        'Iphone 13 PRO MAX':['Green','Midnight'],
        'Iphone SE': ['Red','Midnight','White']
    }
    for (const key in colores) {
        if(key == color.trim()){
            listaColor.innerHTML='';
            for (const iterator of colores[key]) {
                const option = document.createElement('option');
                option.value = iterator;
                listaColor.appendChild(option);
            }
        }
    }
}

// lista de modelos de computadoras dependiendo la marca
const marca = document.querySelector('[data-marca]');
marca.addEventListener('blur',()=>{
    verficaModelo(marca.value)
})

function verficaModelo (modelo){
    const listaModelo = document.querySelector('#nmodelo');
    const modelos={
        'Hp':['14-dq2502','15-ef2518'],
        'Asus':['VivoBook X515EA-BQ2563W','L410MA-Cel4G128Gb-P3'],
        'MSI':['A11MU 15.6','SWORD 15 A11UD-1248US','Stealth 15M'],
        'Dell': ['Inspiron 3501','Latitude 7280 - 12.5']
    }
    for (const key in modelos) {
        if(key == modelo.trim()){
            listaModelo.innerHTML='';
            for (const iterator of modelos[key]) {
                const option = document.createElement('option');
                option.value = iterator;
                listaModelo.appendChild(option);
            }
        }
    }
}
