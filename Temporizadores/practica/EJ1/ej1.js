let nombre;
let btnGuardar = document.getElementById('btnGuardar');

let estaGuardado = localStorage.getItem('nombre');
console.log(estaGuardado);

btnGuardar.addEventListener('click', () =>  {
    nombre = document.getElementById('nombre').value;
    console.log(nombre);

    if(estaGuardado){
        if(nombre === estaGuardado){
            alert("Este nombre ya esta guardado");
        }else{
            localStorage.setItem('Nombre', nombre);
            console.log("Se ha actualizado el nombre");
            location.reload();
        }
    }else{
        locationStorage.setItem('nombre', nombre);
        console.log('Se ha guardado correctamente');
        location.reload();
    }
});

