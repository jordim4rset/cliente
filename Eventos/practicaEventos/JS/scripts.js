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

botonSubmit.addEventListener('click', () => {
    let contrasenya = document.getElementById('contrasenya');
    let correo = document.getElementById('correo');
    console.log(correo.value);
    if(contrasenya.value.length < 8 || contrasenya.value.length > 10){
        contrasenya.style.backgroundColor = "grey";
    }else{
        contrasenya.style.backgroundColor = "white";
    }
    console.log('si pasa por aqui');
    if(!correo.value.includes("@")){
        correo.style.backgroundColor = "grey";
    }else{
        correo.style.backgroundColor = "white";
    }
});