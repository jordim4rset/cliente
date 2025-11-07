let contador = 0;
let hueco = "█";

let temp = setInterval(() => {
    contador++;
    console.log(hueco.repeat(contador));
    if(contador == 10){
        console.log("Carga completada");
        clearInterval(temp)
    }
}, 500);