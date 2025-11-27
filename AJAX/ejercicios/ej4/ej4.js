const datos = {
    name: 'Jordi',
    job: 'Developer'
};

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(datos)
})
.then(response => {
    if(response.ok){
        return response.json();
    }else{
        throw new Error(`HTTP error! status: ${response.status}`);
    }
})
.then(data => {
    console.log('Respuesta del servidor',data);
})
.catch(error => {
    console.error('Error en la petición:',error);
});
