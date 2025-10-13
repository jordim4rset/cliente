//EJERCICIO 1
const colores = ["rojo","verde","azul"]; 

//EJERCICIO 2
const paises = ["España","Francia","Alemania","Italia"];

for(let i = 0; i < paises.length; i++){
    console.log(paises[i]);
}

delete paises[0];

for(let i = 0; i < paises.length; i++){
    console.log(paises[i]);
}

//EJERCICIO 3
let nombres = ["Jordi","Dani","Elias","Alex","Liam"];

let edades = [20,21,27,17,18];

let mayoresDeEdad = new Array();

for(let i = 0; i < nombres.length; i++){
    if(edades[i] >= 18){
        mayoresDeEdad[i] = nombres[i];
    }
}

console.log(mayoresDeEdad);


//EJERCICIO 4
const palabras = ["ana","radar","javascript","reconocer","oro","palindromo","salas"];
const palindromos = new Array();

for(let i = 0; i < palabras.length; i++){
    let palabra = palabras[i];
    let pInvertida = "";

    for(let j = palabra.length -1; j >= 0; j--){
        pInvertida += palabra[j];
    }

    if(palabra == pInvertida){
        palindromos.push(palabra);
    }
}

console.log(palindromos);