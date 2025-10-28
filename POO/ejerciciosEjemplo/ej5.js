class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido(){
        console.log('Sonido Generico');
    }
}


class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }

    emitirSonido(){
        console.log('¡Guau!');
    }
}

const perro1 = new Perro('toby',30);

perro1.emitirSonido();
