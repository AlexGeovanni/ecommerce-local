import { clientService } from "../cliente_service.js";

const pruducto =(id,img,nombre,color,memoria,precio,cantidad,marca,preProducto,preTotal,canTotal)=>{
    const contentProducto = document.querySelector('[data-productosAnadidos]');
    const precioTotal = document.querySelector('[data-totalPrecio]');
    const cantidadTotal = document.querySelector('[data-totalProducto]');
    const div = document.createElement('div');
    div.classList.add('producto')
    div.innerHTML=`
            <div class="img__producto">
                <img src="${img}" alt="">
            </div>
            <div class="info_producto">
                <p>${marca}</p>   
                <h2>${nombre} </h2>
                <h2>${color}</h2>
                <h2>${memoria}</h2>
            </div>
            <h2>$ ${precio}</h2>
            <div class="cantidad_product">
                <button>-</button>
                <input type="text" value="${cantidad}" readonly>
                <button>+</button>
            </div>
            <h2>$ ${preProducto}</h2>
            <div id="${id}" class="eliminar_de_carrito">
                <p id="${id}">elimiar</p>
            </div>
    `
    contentProducto.appendChild(div);
    precioTotal.innerHTML=`$ ${preTotal}`;
    cantidadTotal.innerHTML=canTotal;
}


const contentProducto = document.querySelector('[data-productosAnadidos]');
contentProducto.addEventListener('click',(e)=>{
    e.target.id? clientService.eliminarAnadidos(e.target.id):false
});


clientService.listaproductoAnadidos().then((data)=>{
    let preTotal= 0;
    let canTotal = 0;
    let preProducto =0;
    data.forEach(({id,img,titulo,color,gb,precio,cantidad,marca}) => {
        console.log(data)
        preProducto = precio * cantidad
        preTotal+=preProducto
        canTotal +=cantidad
        pruducto(id,img,titulo,color,gb,precio,cantidad,marca,preProducto,preTotal,canTotal);
    });
})