let visitas = localStorage.getItem('visitas');
let parrafo = document.getElementById('parraf');

if(visitas){
    visitas = parseInt(visitas)+1;
}else{
    visitas = 1;
}

if(visitas > 10){
    visitas = 0;
    localStorage.removeItem('visitas');
}else{
    localStorage.setItem('visitas', visitas);
    parrafo.innerHTML = `Visita, ${visitas}`;
}