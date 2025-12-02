let boton = document.querySelector('button');

boton.addEventListener('click', () => {
    Notification.requestPermission().then((resp) => {
        if(resp == 'granted') new Notification('hola', {
            body: 'Bienvenido a la web',
            icon: 'ronaldo.png',
        });
    });
});