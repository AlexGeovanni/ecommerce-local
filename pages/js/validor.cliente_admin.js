import { clientService } from "./cliente_service.js";
import { modal } from "./Dom/modal-registro.js";


class Cliente {

    constructor(nombre){
        this.nombre = nombre;
    }

    Validar(){
        const cerrarSesion = document.querySelector('[data-cerrarSesion]');
        const dash = document.querySelector('[data-dashboradNav]');
        const iconUsuario = document.querySelector('[data-usuario]');

        const usuarioVerificado = document.querySelector('[data-usuariosVerificado]')
        const perfilNombre = document.querySelector('[data-usuarioNombre]');

        dash.classList.remove('bloqueado');
        usuarioVerificado.classList.remove('bloqueado');
        iconUsuario.classList.add('bloqueado')
        perfilNombre.innerHTML=this.nombre;

        cerrarSesion.addEventListener('click',()=>{
            location.reload();
            localStorage.clear();
        })
    }
}


const ingresar = document.querySelector('[data-ingresaUsuario]');

ingresar.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const correoIngresado = document.querySelector('#email-inicia').value;
    const contrasenhaIngresado = document.querySelector('#contra-inicia').value;
    
    const {correo,id,nombre} = await clientService.usuarioConsulta(contrasenhaIngresado);
    if(contrasenhaIngresado === id && correoIngresado === correo) {
        window.localStorage.setItem("usuario",JSON.stringify({
            correo,
            id,
            nombre,
            valida:true
        }));
        const usuario = new Cliente(nombre);
        usuario.Validar()
    }
    modal();
})


// esta parte verifica si existe usuario guardo dentro de localStorage
const local = window.localStorage.getItem("usuario");
if(local){
    const {nombre,valida}= JSON.parse(local)
    if(valida){
        const usuario = new Cliente(nombre);
        usuario.Validar()
    }
}
