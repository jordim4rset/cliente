let nombre;
let nombreValor;
let btnGuardar = document.getElementById('btnGuardar');

btnGuardar.addEventListener('click', () =>  {
    nombre = document.getElementById('nombre');
    nombreValor = nombre.value;
    console.log(nombreValor);

});

let estaGuardado = localStorage.getItem('nombre');

if(estaGuardado){
    if(nombreValor == estaGuardado){
        alert("Este nombre ya esta guardado");
    }else{
        localStorage.setItem('Nombre', nombreValor);
        console.log("Se ha guardado correctamente");
    }
}