//EJERCICIO 1
let numeros = [10,25,63,84,45,46];
let [uno,dos,...resto] = numeros;

console.log(uno);
console.log(dos);
console.log(resto);

//EJERCICIO 2
let valores = [10,20,30,50,10];
let sinDup = new Set(valores);

console.log(sinDup);

//EJERCICIO 3
let nombres = new Set('Dani','Diego');
nombres.add('Jordi');
console.log(nombres);
nombres.delete('Jordi');
console.log(nombres);

//EJERCICIO 4
const mapNomEdad = new Map();
mapNomEdad.set('Jordi',20);
mapNomEdad.set('Dani',19);

console.log(mapNomEdad);

mapNomEdad.set('Jordi',15);
console.log(mapNomEdad);

//EJERCICIO 5
function contarOcurrencias(palabras){
    const mapa = new Map();

    for(const palabra of palabras){
        if(mapa.has(palabra)){
            mapa.set(palabra, mapa.get(palabra)+1);
        }else{
            mapa.set(palabra, 1);
        }
    }
    return mapa;
}

const arrPalabras = ["jordi","marset","tortosa","jordi"];
const res = contarOcurrencias(arrPalabras);

for(const [palabra, cantidad] of res){
    console.log(`${palabra}: ${cantidad}`);
}