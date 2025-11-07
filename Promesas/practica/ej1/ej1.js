

let nomProduct; 
let dirEnvio;
let btn = document.getElementById('btnCompra');
let mostrar = document.getElementById('resultado');

btn.addEventListener('click', () => {
    nomProduct = document.getElementById('nombreProduct').value;
    dirEnvio = document.getElementById('envio').value;

    procesarPago(nomProduct)
        .then((respuesta1) => {
            mostrar.innerHTML = respuesta1;
            enviarPedido()
                .then((respuesta2) => {
                    mostrar.innerHTML += '<br>'+respuesta2;
                })
                .catch((error) => {
                    mostrar.innerHTML += '<br>'+error;
                });
        })
        .catch((error) => {
            mostrar.innerHTML += '<br>'+error;
        });
});


function procesarPago(producto){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(typeof nomProduct)
            if(nomProduct.trim() !== ''){
                resolve(`Pago procesado correctamente para ${nomProduct}`);
            }else{
                reject('No se puede procesar el pago sin producto');
            }
        }, 1500);
    });
}


function enviarPedido(){
    return new Promise((resolve, reject) => {
        console.log(typeof dirEnvio);
        if(dirEnvio.trim() !== ''){
            setTimeout(() => {
                let num = Math.floor(Math.random()*100);
                console.log(num);
                if(num <= 20){
                    reject('Error durante el envío, intente de nuevo.')
                }else{
                    resolve(`Pedido enviado correctamente a ${dirEnvio}`)
                }
            }, 2000);
        }else{
            reject('Dirección de envío no válida');
        }
    });
}