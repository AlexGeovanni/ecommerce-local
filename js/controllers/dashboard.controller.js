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
            <h2 class="producto__gb">${this.almacenamiento} Gb</h2>
            <h2 class="producto__precio">$${this.precio}</h2>
            <div class="producto__acciones">
            <a  href="./actualizar_producto.html?id=${this.id}" class="editar">Editar <i class="fa-sharp fa-solid fa-pen-to-square"></i></a>
            <button id="${this.id}" class="eliminar" data-elimina>Eliminar <i class="fa-sharp fa-solid fa-trash"></i></button>
        `
        contentDashboard.appendChild(div)
    }
    elimina(id){
        clientService.eliminarProducto(id).then(respuesta=>{
            console.log(respuesta)
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
const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    let radioValor =0;
    const url ='../../img/iphones/iphone14_pro_max_gold.jpg'
    const nombre = document.querySelector('[data-nombre]').value
    const color  = document.querySelector('[data-color]').value
    const almacenamiento ='256';
    const precio = document.querySelector('[data-precio]').value;
    const almacenamieto = document.getElementsByName('memoria');
    for (const radio of almacenamieto) {
        if (radio.checked) {
            radioValor  = radio.value
        }
    }

    clientService.crearProducto(url,nombre,color,radioValor,precio).then(respuesta=>{
        window.location.href="./dashboard.html"
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