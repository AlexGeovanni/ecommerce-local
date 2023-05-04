import { clientService } from "../cliente_service.js";

const btn = document.querySelector('#content_cards__iphone');
//const carrito = document.querySelector('[data-carrito]')

btn.addEventListener('click',async(e)=>{
    if(e.target.type=='submit'){
        e.preventDefault();
        await añadirCarrito(e.target.id);
        // const productos = document.querySelector('[data-shop]').addEventListener('click',()=>{
        //     ele.forEach(({id,nombre,img,color,memoria,precio})=>{
        //         clientService.productoAnadir(id,nombre,img,color,memoria,precio)
        //     })
        // })
    //     const productos = document.querySelector('[data-compra]');
    //     productos.addEventListener('click',()=>{
    //         ele.map(({cantidad, id,nombre,img,color,memoria,precio})=>{
    //         console.log(cantidad,id,nombre,img,color,memoria,precio);
    //         clientService.productoAnadir(id,nombre,img,color,memoria,precio);
    //     })
    // })
    }
});

let cantidad = 1;
const añadirCarrito=async(id)=>{
    let bolean = false;
    const iphone = await clientService.datelleProducto(id);
    let nombre =iphone.titulo
    let precio =Number(iphone.precio)
    let color =iphone.color
    let img =iphone.img
    let memoria =iphone.gb

    const lPAnaadidos = await clientService.listaproductoAnadidos();
    for (const key of lPAnaadidos) {
        if(key.id == id){
            cantidad+=key.cantidad
            bolean=true
            break;
        }
    }
    !bolean?
        clientService.productoAnadir(id,img,nombre,color,memoria,precio,cantidad):
        clientService.cantidadCarrito(id,cantidad)
    
    //clientService.productoAnadir(idbtn,nombre,img,color,memoria,precio);
    

    //const producto = {id,nombre,img,color,memoria,precio,cantidad};

    // if(bolean){
    //     producto.cantidad = 0;
    //     productoAnadido.push(producto)
    //     bolean=false
    // }
    // for (const idis of productoAnadido) {
    //     if(idis.id == id){
    //         idis.cantidad+=1
    //         bolean = false;
    //         break;
    //     }else bolean = true

    // }
    // if(bolean){
    //     productoAnadido.push(producto)
    //     bolean=false
    // }
    // console.log(productoAnadido)
    //const productos = document.querySelector('[data-compra]');
        //productos.addEventListener('click',()=>{
        //     productoAnadido.map(({cantidad, id,nombre,img,color,memoria,precio})=>{
        //     console.log(cantidad,id,nombre,img,color,memoria,precio);
        //})
    //})
}

