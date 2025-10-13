/*
//EJERCICIO  1
let numeros = new Array(10);
numeros.fill(5);
console.log(numeros);

//EJERCICIO 2
let letras = new Array();
letras.push("A","B","C");
letras.push("D","E");
console.log(letras);

//EJERCICIO 3
let colores = ["rojo","verde","azul","amarillo","naranja","violeta"];
let colores2 = colores.splice(1,4);
console.log(colores);
console.log(colores2);

//EJERCICIO 4

let nombres = ['Ana','Pedro','Juan','Sofía','Carlos'];
nombres = nombres.sort();
console.log(nombres);
nombres = nombres.reverse();
console.log(nombres);
*/

//EJERCICIO 5
let edades = [25,30,18,40,25,30];
console.log(edades.indexOf(30));
console.log(edades.lastIndexOf(25));

//EJERCICIO 6
let numeros = [4,21,33,12,9,54];
let pares = numeros.filter(num => num % 2 === 0);
console.log(pares);

//EJERCICIO 7
let letras = ['a','b','c','z'];
let letrasContiene = letras.includes('c');

if(letras.includes('c') == true && letras.includes('z') == true){
    console.log('Contiene c y z');
}else{
    console.log('No contiene c y z');
}

//EJERCICIO 8
let data = [
    {name:"Nacho",telephone:"966112233",age:40},
    {name:"Ana",telephone:"911223344",age:35},
    {name:"Mario",telephone:"611998877",age:15},
    {name:"Laura",telephone:"633663366",age:17}
];

data.push({name: "Pedro", telephone: "611944444", age: 25});
data.push({name: "Julia", phone: "633232323", age: 37});

console.log(data);

data.sort((a, b) => a.name.localeCompare(b.name));
console.log(data);

//EJERCICIO 9
let productos = [
    {nombre:"Laptop",categoria:"Electrónica",precio:1500},
    {nombre:"Silla",categoria:"Muebles",precio:100},
    {nombre:"Cargador",categoria:"Electrónica",precio:50}
];

let prod = productos.find(function (p){
    return p.nombre === 'Silla';
});

console.log(prod);