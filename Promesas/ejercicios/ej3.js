let boton = document.getElementById('btnIniciar');
let parrafo = document.getElementById('mensajes');
let campoTexto = document.getElementById('name');

function verificarUsuario(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(nombre == 'admin'){
                resolve('Usuario verificado correctamente');
            }else{
                reject('Usuario no encontrado');
            }
        }, 1500);
    })
}

function cargarDatosUsuario(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Datos del usuario cargados correctamente');
        }, 2000);
    })
}

boton.addEventListener('click', () => {
    verificarUsuario(campoTexto.value)
        .then((respuesta) => {
            parrafo.innerHTML = respuesta;
            return cargarDatosUsuario();
        })
        .then((respuesta2) =>{
            parrafo.innerHTML += '<br>'+respuesta2;
        })
        .catch((error) => {
            parrafo.innerHTML = 'Error: '+error;
        })
});
