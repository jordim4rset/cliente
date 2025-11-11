let numRandom;
let num;
let listaNumeros = [];

for(let j = 0; j < 50; j++){
    num = '';
    for(let i = 0; i < 6; i++){
        while(num.includes(numRandom)){
            numRandom = Math.floor(Math.random() * 49)+1;
        }
        num += numRandom;
    }
    listaNumeros[j] = num;
}

listaNumeros.forEach(numero => {
    console.log(numero);
});