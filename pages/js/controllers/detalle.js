import { clientService } from "../cliente_service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id')
const contentDetalle = document.querySelector('#detalle_producto');


export const detalleProducto = async()=>{
    if(id==null){
        alert('algo salio mal')
    }
    const Producto = await clientService.datelleProducto(id);
    if(Producto.producto == "celular") detalleCelular(Producto)
    if(Producto.producto == "computadora") detalleComputadora(Producto)
}

detalleProducto();

const detalleCelular =({img,titulo,color,gb,precio,marca})=>{
    const divInfoDetalle = document.createElement('div');
    const divInfoPrincipal = document.createElement('div');

    divInfoDetalle.classList.add('info-detalle');
    divInfoPrincipal.classList.add('info-principal');

    divInfoDetalle.innerHTML=`
    <div class="imgen">
        <img src="${img}" alt="">
    </div>
    <div class="info-producto">
        <h2>Informacion del Articulo</h2>
        <div class="detalles">
            <p>Detalles</p>
            <ul>
                <li><p>Increibles mejoras en fotos con poca Luz</p></li>
                <li><p>Resistencia al agua</p></li>
                <li><p>Todo gracias a la potencia del ultrarrápido chip A16 Bionic.</p></li>
            </ul>
        </div>
        <p>Navega dentro de tú tienda en línea para encontrar más variedad de equipos y accesorios</p>
    </div>
    `

    divInfoPrincipal.innerHTML=`
        <p class="marca">${marca}</p>
        <h2>${titulo} ${marca} ${color}</h2>
        <h2>${gb}</h2>
        <h2 class="precio">$${precio}</h2>
        <p>Hasta 18 meses sin intereses</p>
        <button>Agregar</button>
    `
    contentDetalle.appendChild(divInfoDetalle);
    contentDetalle.appendChild( divInfoPrincipal);
}


const detalleComputadora =({img,titulo,color,gb,gbssd,precio,marca,procesador,ram})=>{
    const divInfoDetalle = document.createElement('div');
    const divInfoPrincipal = document.createElement('div');

    divInfoDetalle.classList.add('info-detalle');
    divInfoPrincipal.classList.add('info-principal');

    divInfoDetalle.innerHTML=`
    <div class="imgen">
        <img src="${img}" alt="">
    </div>
    <div class="info-producto">
        <h2>Informacion del Articulo</h2>
        <div class="detalles">
            <p>Detalles</p>
            <ul>
                <li><p>Teclado en Español</p></li>
                <li><p>Micrófono integrado</p></li>
                <li><p>Windows 11</p></li>
                <li><p>Procesador ${procesador}</p></li>
            </ul>
        </div>
        <div class="detalles">
            <p>Especifiaciones</p>
            <p><strong>Color</strong></p>
            <p>${color}</p>
            <p><strong>Memoria Interna</strong></p>
            <p>${gb}</p>
            <p><strong>Memoria SSD</strong></p>
            <p>${gbssd}</p>
            <p><strong> Procesador</strong></p>
            <p>${procesador}</p>
            <p><strong> Contenido del Empaque</strong></p>
            <p>1 Laptop, Cargador, Instructivo</p>
            <p><strong> Sistema Opertivo</strong></p>
            <p>Windows</p>
            <p><strong> Memoria RAM</strong></p>
            <p>${ram}</p>
        </div>
        <p>
        ¡Las mejores marcas de laptops, artículos de oficina, diversos modelos de mouse, 
        bocinas portátiles, accesorios para computadoras y muchos otros productos más los 
        puedes encontrar con entrega a domicilio al navegar en nuestra tienda en línea!
        </p>
    </div>
    `

    divInfoPrincipal.innerHTML=`
        <p class="marca">${marca}</p>
        <h2>Laptop ${marca} ${titulo} ${procesador} ${ram} SSD</h2>
        <h2 class="precio">$${precio}</h2>
        <p>Hasta 18 meses sin intereses</p>
        <button>Agregar</button>
    `
    contentDetalle.appendChild(divInfoDetalle);
    contentDetalle.appendChild( divInfoPrincipal);
}