let precio = 100;
console.log(`Precio inicial: ${precio}`);

let intervalo = setInterval(() => {
    let cambio = Math.floor(Math.random() * 11) - 5;
    precio += cambio;

    console.log(`Precio actual: ${precio}`);

    if (precio >= 120) {
        console.log("¡Máximo alcanzado!");
        clearInterval(intervalo);
    } else if (precio <= 80) {
        console.log("¡Mínimo alcanzado!");
        clearInterval(intervalo);
    }

}, 1000);
