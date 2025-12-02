let formulario = document.querySelectorAll('.formulario');
let imagenDia = document.getElementById('imagenDia');
let botonFormulario = document.getElementById('btnCargar');

imagenDia.style.display = 'none';

console.log('formulario',formulario);

botonFormulario.addEventListener('click', () => {

    let apiKey = document.getElementById('apiKey').value;
    console.log(apiKey);

    fetch('https://opendata.aemet.es/opendata/api/mapasygraficos/analisis'+apiKey)
        .then((response) => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
        })
        .then((data) => {
            
        })
        .catch((error) => {
            console.error(error);
        })

});


