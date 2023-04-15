
const banners = document.querySelector('[ data-banners]');
const puntos = document.querySelectorAll('.punto')


puntos.forEach((cadaPunto, i)=>{
    console.log(puntos[i])
    cadaPunto.addEventListener('click',()=>{
        let posicion = i;
        let operacion = posicion * -25;
        banners.style.transform=`translateX(${operacion}%)`
        puntos.forEach((cadaPunto, i)=>{
            puntos[i].classList.remove('activo')
        })
        cadaPunto.classList.add('activo');
    })
})