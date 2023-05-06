import { clientService } from "../cliente_service.js";


const btns = document.querySelectorAll('[data-contentProducto]');
//const carrito = document.querySelector('[data-carrito]')

btns.forEach((element)=>{
    element.addEventListener('click',async(e)=>{
        if(e.target.localName != "button" && e.target.localName != "div" && e.target.localName != "p"){
            const id = e.target.parentElement.parentElement.id
            window.location.href=`./detalle_producto.html?id=${id}`;
        }
        if(e.target.type=='submit'){
            e.preventDefault();
            await añadirCarrito(e.target.parentElement.id);
        }
    });
})

let cantidad = 1;
const añadirCarrito=async(id)=>{
    console.log(id)
    let bolean = false;
    const producto = await clientService.datelleProducto(id);
    let nombre =producto.titulo
    let precio =Number(producto.precio)
    let color =producto.color
    let img =producto.img
    let memoria =producto.gb
    let marca = producto.marca

    const lPAnaadidos = await clientService.listaproductoAnadidos();
    for (const key of lPAnaadidos) {
        if(key.id == id){
            cantidad+=key.cantidad
            bolean=true
            break;
        }
    }
    !bolean?
        clientService.productoAnadir(id,img,nombre,color,memoria,precio,cantidad,marca):
        clientService.cantidadCarrito(id,cantidad)
}

