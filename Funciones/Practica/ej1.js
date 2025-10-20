/* EJERCICIO 1 */
/*
function ejercicio1(){
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

    let valoresUnicos = new Set(respuestas)

    console.log(valoresUnicos);

    valoresUnicosOrdenado = [...valoresUnicos];

    valoresUnicosOrdenado = valoresUnicosOrdenado.sort();
    console.log(valoresUnicosOrdenado);


    valoresUnicosReverse = valoresUnicosOrdenado.reverse();

    console.log(valoresUnicosReverse);
}

ejercicio1();
*/




/* EJERCICIO 2  Crea una aplicación web que pida al usuario palabras continuamente hasta que el popup
se deje vacío o se cancele.*/



function ejercicio2(){

    let resp = '';
    let respuestas = [];
    do{
        resp = window.prompt("Inserte la palabra");
        if(resp == ''){
            
        }else{
            respuestas.push(resp);
        }
    }while(resp);

}

ejercicio2();