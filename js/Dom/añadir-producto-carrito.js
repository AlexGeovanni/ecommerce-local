
const carritoShop = document.querySelector('[data-shop]');
const cerrarCarrito = document.querySelector('[data-cerraCarrito]');


// estas funciones nos ayudan abrir el modal del carrito 
carritoShop.addEventListener('click',()=>{
    const productoAñadidos = document.querySelector('[data-productos]')
    productoAñadidos.classList.add('product_click')
})
cerrarCarrito.addEventListener('click',()=>{
    const productoAñadidos = document.querySelector('[data-productos]')
    productoAñadidos.classList.toggle('product_click')
})
