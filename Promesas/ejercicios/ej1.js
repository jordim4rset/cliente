function sumarAsync(a, b){
    return new Promise((resolve, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number'){
            reject('Para sumar, deben ser las dos variables números.');
        }else{
            resolve(a+b);
        }
    });
}

sumarAsync(5,6).then((resultado) => {
    console.log('Resultado: ', resultado);
});

sumarAsync(5,'jordi').catch((error) => {
    console.log(error);
});

