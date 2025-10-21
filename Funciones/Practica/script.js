/* EJERCICIO 1 */

function ejercicio1(){

    //SOLICITAMOS AL USUARIO QUE INTRODUZCA PALABRAS HASAT QUE LO DEJE VACIO
    let resp = '';
    let respuestas = [];
    do{
        resp = window.prompt("Inserte la palabra");
        if(resp == ''){
            
        }else{
            respuestas.push(resp);
        }
    }while(resp != '' || resp == null);
    
    console.log(respuestas);

    //CREAMOS UN SET CON LOS VALORES DEL ARRAY RESPUESTAS
    let valoresUnicos = new Set(respuestas)

    console.log(valoresUnicos);

    //ORDENAMOS EL ARRAY
    valoresUnicosOrdenado = [...valoresUnicos];

    valoresUnicosOrdenado = valoresUnicosOrdenado.sort();
    console.log(valoresUnicosOrdenado);

    //ORDENAMOS EL ARRAY DE FORMA REVERSA
    valoresUnicosReverse = valoresUnicosOrdenado.reverse();

    console.log(valoresUnicosReverse);
}






/* EJERCICIO 2  Crea una aplicación web que pida al usuario palabras continuamente hasta que el popup
se deje vacío o se cancele.*/



function ejercicio2(){

    //SOLICITAMOS AL USUARIO QUE INTRODUZCA PALABRAS HASAT QUE LO DEJE VACIO
    let resp = '';
    let respuestas = [];
    do{
        resp = window.prompt("Inserte la palabra");
        if(resp == ''){
            
        }else{
            respuestas.push(resp);
        }
    }while(resp);

    console.log(respuestas);

    //CREAMOS UN MAPA
    let respuestasMap = new Map();

    //RECORREMOS EL ARRAY RESPUESTA Y AÑADIMOS AL MAPA RESPUESTA A RESPUESTA
    for(let respuesta of respuestas){
        //COMPRUEBA SI LA PALABRA YA ESTA AGREGADA, SI ESTA AGREGADA SE LE SUMA UN 1, SI NO ESTÁ SE LE ASIGNA 0
        respuestasMap.set(respuesta, (respuestasMap.get(respuesta) || 0) + 1)
    }

    console.log(respuestasMap);
}


//CREAMOS EL ARRAY QUE POSTERIORMENTE LE PASAREMOS A LA FUNCIÓN
let array = [1,2,3,4];

function callback(array){
    array = array.filter(function(num){
        return num*2;
    });
    console.log(array);
}

callback(array);