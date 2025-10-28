//EJERCICIO 2

let juan = {

    nombre:'juan',
    edad:30,
    profesion:'Ingeniero',

    presentarse:function(){
        return 'hola soy '+this.nombre+' tengo '+this.edad+' años y soy '+this.profesion;
    },

    cumplirAnios:function(){
        this.edad += 1;
    },
};

console.log(juan.presentarse());

juan.cumplirAnios();

console.log(juan.edad);
