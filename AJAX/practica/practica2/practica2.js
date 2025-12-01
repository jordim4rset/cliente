
const id = prompt('Inserte un número');

fetch(`https://dummyjson.com/products/${id}`)
    .then((response) => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
    })
    .then((data) => {
        document.getElementById('id').textContent = data.id;
        document.getElementById('titulo').textContent = data.title;
        document.getElementById('precio').textContent = data.price;

        const obj = {
            id: data.id,
            title: data.title,
            price: data.price
        }

        return fetch('https://httpbin.org/post',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)

        })
        .then((responsePost) => {
            if(responsePost.ok){
                return responsePost.json();
            }else{
                throw new Error(`HTTP Error! Status: ${responsePost.status}`)
            }
        })
        .then((dataPost) => {
            document.getElementById('titlePost').innerHTML = dataPost.json.title;
            console.log('Titulo recibido: ',dataPost.json.title);
            console.log('Respuesta servidor',dataPost);
        })
    })
    .catch((error) => {
        console.error('Error en la petición',error);
    });