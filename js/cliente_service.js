const listaProductos = ()=> fetch('http://localhost:3000/producto').then((respuesta)=> respuesta.json())


//para crear productos
const crearProducto =(img,titulo,color,gb,precio,marca,producto)=>{

    return fetch('http://localhost:3000/producto',{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body: JSON.stringify({id: uuid.v4(),img,titulo,color,gb,precio,marca,producto})
    })
}
const crearProductoCompu =(img,titulo,color,gb,gbssd,precio,marca,procesador,ram,producto)=>{

    return fetch('http://localhost:3000/producto',{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body: JSON.stringify({id: uuid.v4(),img,titulo,color,gb,gbssd,precio,marca,procesador,ram,producto})
    })
}


//Eliminar producto atraves de un id
const eliminarProducto =(id)=>{
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "DELETE"
    })
}

// ver el detalle de un producto especifico a traves de su id
const datelleProducto = async (id)=>{
    const respuesta = await fetch(`http://localhost:3000/producto/${id}`)
    return await respuesta.json()
}


// para actualizar el producto
const actualizarProducto=(id,img,titulo,color,gb,precio)=>{
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({id,img,titulo,color,gb,precio})
    })
}




// consulta de productos añadidos
const listaproductoAnadidos = ()=> fetch('http://localhost:3000/produtoAnadido').then((respuesta)=> respuesta.json())

const productoAnadir =(id,img,titulo,color,gb,precio,cantidad)=>{
    return fetch('http://localhost:3000/produtoAnadido',{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body: JSON.stringify({id,img,titulo,color,gb,precio,cantidad})
    })
}
// la cantidad de producto que se envia si el producto ya existe solo se envia la cantidad
const cantidadCarrito=(id,cantidad)=>{
    return fetch(`http://localhost:3000/produtoAnadido/${id}`,{
        method: "PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({id,cantidad})
    })
}

// eliminamos lo productos ya añadidos
const eliminarAnadidos =async (id)=> {
    return await fetch(`http://localhost:3000/produtoAnadido/${id}`,{
        method: "DELETE"
    });
} 
export const clientService ={
    listaProductos,
    crearProducto,
    crearProductoCompu,
    eliminarProducto,
    datelleProducto,
    actualizarProducto,
    listaproductoAnadidos,
    productoAnadir,
    eliminarAnadidos,
    cantidadCarrito,
}