//EJERCICIO 1

let juan = {

    nombre:'juan',
    edad:30,
    profesion:'Ingeniero',

    presentarse:function(){
        return 'hola soy '+this.nombre+' tengo '+this.edad+' años y soy '+this.profesion;
    }
};

console.log(juan.presentarse());


