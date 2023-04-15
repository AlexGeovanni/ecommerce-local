import { clientService } from "../cliente_service.js";

export class Productos{
    constructor(img,titulo,color,gb,precio,id){
        this.img =img
        this.titulo=titulo
        this.color =color
        this.almacenamiento = gb
        this.precio = precio
        this.id = id;
    }
    
    productoIndex(){
        const contentCards = document.querySelector('#content_cards');
        const div = document.createElement('div');
        div.classList.add("card__cel");
        div.innerHTML=`
                <div class="image__cel">
                    <img src="${this.img}" alt="${this.titulo}">
                </div>
                <div class="info_cel">
                    <h2 data-titulo  class"info">${this.titulo}</h2>
                    <div>
                        <p><span>Color: </span>${this.color}</p>
                        <p>${this.almacenamiento}Gb</p>
                    </div>
                    <h2 data-precio class="info">$${this.precio}</h2>
                </div>
                <button id="${this.id}" class="agregar"  data-button >Agregar</button>
        `;
        contentCards.appendChild(div)
    }
}

clientService.listaProductos().then((data)=>{
    data.forEach(({id,img,titulo,color,gb,precio}) => {
        const productIndex = new  Productos(img,titulo,color,gb,precio,id);
        productIndex.productoIndex();
    });
})