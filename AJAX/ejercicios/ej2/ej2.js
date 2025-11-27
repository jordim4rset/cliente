fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error(`HTTp error! status: ${response.status}`);
        }
    })
    .then((data) => {
        const ul = document.getElementById('listaUsuarios');
        data.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `${usuario.name} - ${usuario.email}`;
            ul.appendChild(li);
        });
    })
    .catch(error => console.error('Error', error));