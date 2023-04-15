const listaProductos = ()=> fetch('http://localhost:3000/iphone').then((respuesta)=> respuesta.json())


//para crear productos 
const crearProducto =(img,titulo,color,gb,precio)=>{

    return fetch('http://localhost:3000/iphone',{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body: JSON.stringify({id: uuid.v4(),img,titulo,color,gb,precio})
    })
}

//Eliminar producto atraves de un id
const eliminarProducto =(id)=>{
    return fetch(`http://localhost:3000/iphone/${id}`,{
        method: "DELETE"
    })
}

// ver el detalle de un producto especifico

const datelleProducto =(id)=>{
    return fetch(`http://localhost:3000/iphone/${id}`).then((respuesta)=> respuesta.json());
}

const actualizarProducto=(id,img,titulo,color,gb,precio)=>{
    return fetch(`http://localhost:3000/iphone/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({id,img,titulo,color,gb,precio})
    })
}

export const clientService ={
    listaProductos,
    crearProducto,
    eliminarProducto,
    datelleProducto,
    actualizarProducto
}