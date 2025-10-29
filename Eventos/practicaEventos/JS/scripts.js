/* EJERCICIO 1 */

let ej1 = document.getElementById('ej1');
let menu = document.getElementById('menu');
let opcionesMenu = document.querySelectorAll('input');
let numeroAleatorio = document.getElementById('numAle');

console.log(opcionesMenu);

opcionesMenu.forEach(opcion => {
    opcion.addEventListener('click', () =>{
        if(opcion.id == 'saludo'){
            alert('hola');
        }
        if(opcion.id == 'caja'){
            let caja = document.createElement('div.caja');
            caja.textContent = 'Nueva Caja';
            ej1.appendChild(caja);
            caja.style.backgroundColor = "red";
            caja.style.height = '50px;'

        }
        if(opcion.id == 'numero'){
            let num = Math.floor(Math.random()*10);
            numeroAleatorio.innerHTML = ' '+num;
        }
    });
});

/* EJERCICIO 2 */

let botonSubmit = document.getElementById('botonSubmit');
let campoCorrreo = document.getElementById('correo');
let campoPassw = document.getElementById('contrasenya');
let alertPassw = document.getElementById('mensajeAlertaContrasenya');
let alertCorreo = document.getElementById('mensajeAlertaCorreo');


campoCorrreo.addEventListener('blur', () => {
    if(!correo.value.includes("@")){
        alertCorreo.innerHTML = 'Debe incluir `@`';
    }
});

campoPassw.addEventListener('blur', () => {
    if(contrasenya.value.length < 8 || contrasenya.value.length > 10){
        alertPassw.innerHTML = 'Debe contener entre 8 y 10 caracteres';
    }
});

botonSubmit.addEventListener('click', () => {
    if(contrasenya.value.length < 8 || contrasenya.value.length > 10){
        contrasenya.style.backgroundColor = "grey";
    }else{
        contrasenya.style.backgroundColor = "white";
    }
    if(!correo.value.includes("@")){
        correo.style.backgroundColor = "grey";
    }else{
        correo.style.backgroundColor = "white";
    }
});