

fetch('https://randomuser.me/api/')
    .then((response) => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
    })
    .then((data) => {
        const usuario = data.results[0];
        document.getElementById('imagen').src = usuario.picture.large;
        document.getElementById('nombre').textContent = usuario.name.title;
        document.getElementById('apellido').textContent = usuario.name.first+' '+usuario.name.last;
        document.getElementById('email').textContent = usuario.email;
        document.getElementById('direccion').textContent = usuario.location.street.number+' '+usuario.location.street.name;
        document.getElementById('pais').textContent = usuario.location.country;
    })
    .catch((error) => {
        console.error('Error en la petición: ',error);
    });