/* EJERCICIO 1 */

/* Haz un programa que cuando se pulse un botón “Nuevo número”, añada un elemento
con un número aleatorio a una lista desordenada (elemento UL). */


//SELECCIONAMOS EL BOTÓN
let boton = document.getElementById('botonEj1');

//SELECCIONAMOS LA LISTA
let lista = document.getElementById('listaNumero');

//CREAMOS EL EVENTO PARA QUE ASIGNE LA FUNCIÓN AL HACER CLICK SOBRE EL BOTÓN
boton.addEventListener('click', () => {
    let nuevoLi = document.createElement('li');
    nuevoLi.innerHTML = Math.floor(Math.random() * (9 - 1 +1)) + 1;;
    lista.appendChild(nuevoLi);
})


/* EJERCICIO 2 */

/* Haz un programa que mediante eventos y el uso del objeto event, te muestre en todo
momento la posición actual del ratón en pantalla. Para mostrarlo modificaremos de forma
dinámica un elemento XHTML (Ejemplo, un <p>) que nos muestre la posición actual del
ratón. */


document.body.addEventListener('mouseover', (evento) => {
    document.getElementById('coordenadas').innerHTML = evento.clientX+' '+evento.clientY;
});


/* EJERCICIO 3 */

/* Haz un programa que tenga 3 elementos <p> y al hacer clic sobre ellos desaparezcan
(se oculten) y al hacer clic derecho los elimine. También deberá tener un botón
“Reaparecer” que hará que aparezcan todos los elementos desaparecidos (pero no los
eliminados). */

//SELECCIONAMOS LAS P QUE ESTEN DENTRO DEL DIV
let parraf = document.getElementById('ej3').querySelectorAll('p');

//SELECCIONAMOS EL BOTÓN
let botonEj3 = document.getElementById('botonEj3')

//EVENTO PARA HACER DESAPARECER P
parraf.forEach(p => {
    p.addEventListener('click', () => {
        p.style.display = 'none';
    });
});

//EVENTO PARA ELIMINAR P
parraf.forEach(p => {
    p.addEventListener('contextmenu', () => {
        p.remove();
    });
});

//EVENTO PARA RECUPERAR LAS P DESAPARECIDAS
botonEj3.addEventListener('click', () => {
    parraf.forEach(p =>{
        console.log('entra foreach');
        if(p.style.display == 'none'){
            console.log('entra if');
            p.style.display = 'block';
        }
    });
});

/* EJERCICIO 4 */

/* Crea una página con botones de selección única, cada uno con un nombre distinto
(por ejemplo: “Juan”, “Ana”, “Luis”). Al hacer clic en una opción, debe aparecer una alerta
saludando a esa persona. Usa una única función que reciba el nombre como parámetro
para mostrar el saludo. */

function llamar(nombre){

}