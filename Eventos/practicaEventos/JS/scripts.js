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
            let num = Math.floor(Math.random()*100);
            numeroAleatorio.innerHTML = ' '+num;
        }
    });
});

/* EJERCICIO 2 */

