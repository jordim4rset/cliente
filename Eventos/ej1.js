/* EJERCICIO 1 */

/* Haz un programa que cuando se pulse un botón “Nuevo número”, añada un elemento
con un número aleatorio a una lista desordenada (elemento UL). */

//CREAMOS LA FUNCIÓN
function mostrarNumRandom(){
    //GENERAMOS EL NÚMERO ALEATORIO
    let num = Math.floor(Math.random() * (9 - 1 +1)) + 1;

    //PONEMOS EN EL <LI></LI> EL NUMERO
    document.getElementById('numero').innerHTML = num;

}

//CREAMOS EL EVENTO PARA QUE ASIGNE LA FUNCIÓN AL HACER CLICK SOBRE EL BOTÓN
document.getElementById('botonEj1').addEventListener('click', mostrarNumRandom);


/* EJERCICIO 2 */

/* Haz un programa que mediante eventos y el uso del objeto event, te muestre en todo
momento la posición actual del ratón en pantalla. Para mostrarlo modificaremos de forma
dinámica un elemento XHTML (Ejemplo, un <p>) que nos muestre la posición actual del
ratón. */

document.getElementsByTagName('body').addEventListener('onmouseover', () => {
    document.getElementById('coordenadas').innerHTML()
});