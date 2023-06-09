import { clientService } from "../cliente_service.js";
export class Productos{
    constructor(img,titulo,color,gb,precio,id){
        this.img =img
        this.titulo=titulo
        this.color =color
        this.almacenamientoIT = gb
        this.precio = precio
        this.id = id;
    }
    productoCelular(){
        const contentCards = document.querySelector('#content_cards__iphone');
        const div = document.createElement('div');
        div.classList.add("card__cel");
        div.id=`${this.id}`
        div.innerHTML=`
                <div class="image__cel">
                    <img src="${this.img}" alt="${this.titulo}">
                </div>
                <div class="info_cel">
                    <h2>${this.titulo}</h2>
                    <div>
                        <p><span>Color: </span>${this.color}</p>
                        <p>${this.almacenamientoIT}</p>
                    </div>
                    <p>$${this.precio}</p>
                </div>
                <button type="submit" class="agregar"  data-button >Agregar</button>
        `;
        contentCards.appendChild(div)
    }

    productoComputadora(gbssd,marca,procesador,ram){
        const contentCards = document.querySelector('#content_cards__laptop');
        const div = document.createElement('div');
        div.classList.add("card__lap");
        div.id=`${this.id}`
        div.innerHTML=`
                <div class="image__lap">
                    <img src="${this.img}" alt="${this.titulo}">
                </div>
                <div class="info_lap">
                        <h2 class="marca">${marca}</h2>
                        <h2>Laptop ${marca} ${procesador} ${ram} ${gbssd} </h2>
                        <p>$ ${this.precio}</p>
                </div>
                <button type="submit" class="agregar"  data-button >Agregar</button>
        `;
        contentCards.appendChild(div)
    }

}


clientService.listaProductos().then((data)=>{
    data.forEach(({img,titulo,color,gb,gbssd,precio,marca,procesador,ram,producto,id}) => {
            if(producto === "celular"){
                const productIndex = new  Productos(img,titulo,color,gb,precio,id);
                productIndex.productoCelular();
            }else{
                const productoCompu = new Productos(img,titulo,color,gb,precio,id);
                productoCompu.productoComputadora(gbssd,marca,procesador,ram);
            }
    });
})

