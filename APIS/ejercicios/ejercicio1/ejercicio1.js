let body = document.querySelector('body');

navigator.geolocation.getCurrentPosition((pos) => {

    console.log(pos.coords.latitude);

    if(pos.coords.latitude > 0){
        body.style.backgroundColor = 'blue';
    }else if(pos.coords.latitude < 0){
        body.style.backgroundColor = 'green';
    }else{
        body.style.backgroundColor = 'yellow';
    }
});