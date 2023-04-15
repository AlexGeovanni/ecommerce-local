const contentIcon= document.querySelector('[data-conteIcon ]');

contentIcon.addEventListener('click',()=>{
    const contentBuscador = document.querySelector('[data-conteBuscador]')
    contentBuscador.classList.toggle('show__buscador')
})