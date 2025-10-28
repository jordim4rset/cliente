/* EJERCICIO 1 */

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

document.body.addEventListener('mouseover', (evento) => {
    document.getElementById('coordenadas').innerHTML = evento.clientX+' '+evento.clientY;
});


/* EJERCICIO 3 */

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
let radios = document.querySelectorAll("input[name='lomismo']");

radios.forEach(radio => {
    radio.addEventListener('click', () => {
        llamar(radio.value);
    });
});

function llamar(nombre){
    alert('Hola '+nombre);
}

/* EJERCICIO 5 */

let botonEj5 = document.getElementById('botonEj5');
let campoTexto = document.getElementById('campoTexto');

botonEj5.addEventListener('click', () => {
    let texto = campoTexto.value;
    let caracteres = texto.length;
    alert(caracteres);
});

/* EJERCICIO 6 */
/* Crea varios cuadros de colores (por ejemplo: rojo, azul, verde). Al pasar el cursor por
encima de cada uno, cambia el fondo del documento al color del cuadro. */

let cuadradoVerde = document.getElementById('verde');
let cuadradoAzul = document.getElementById('azul');
let cuadradoRojo = document.getElementById('rojo');


cuadradoVerde.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = "green";
});
cuadradoAzul.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = "blue";
});
cuadradoRojo.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = "red";
});

/* EJERCICIO 7 */
/* Crea un desplegable con opciones de países. Cuando el usuario seleccione uno,
muestra un mensaje que diga: “Has seleccionado: [país]”. */
let seleccion
let opciones = document.querySelectorAll('option');

console.log(opciones);

opciones.forEach(pais => {
    pais.addEventListener('change', () =>{
        alert('Has seleccionado '+pais.value);
    })
});








