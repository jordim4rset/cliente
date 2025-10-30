//CLASE ORDENADOR
class Ordenador{
    
    //CONSTRUCTOR
    constructor(marca, modelo, ram, capacidad, pantalla){

        if(pantalla == undefined){
            this.pantalla = 17;
        }else{
            this.pantalla = pantalla;
        }

        if(capacidad == undefined){
            this.capacidad = 512;
        }else{
            this.capacidad = capacidad;
        }

        if(ram == undefined){
            this.ram = 4;
        }else{
            this.ram = ram;
        }

        this.marca = marca;
        this.modelo = modelo;
    }

    //MÉTODO TO STRING
    toString(){
        return 'Marca: '+this.marca+', Modelo: '+this.modelo+', RAM: '+this.ram+', Capacidad: '+this.capacidad+', Pantalla '+this.pantalla;
    }
}

//CLASE PORTATIL HEREDA DE ORDENADOR
class Portatil extends Ordenador{
    constructor(marca, modelo, ram, capacidad, pantalla, autonomia){
        super(marca,modelo,ram=4,capacidad=256,pantalla=12);
        if(autonomia == undefined){
            this.autonomia = 4;
        }else{
            this.autonomia = autonomia;
        }
    }
}

let ord1;
let laptop1;


//CREAR ORDENADOR
let botonCrearOrdenador = document.getElementById('btnCrearOrdenador');
let propOrdenador = document.getElementById('propOrdenador');

botonCrearOrdenador.addEventListener('click', () => {
    ord1 = new Ordenador('Asus', 'A15');
    propOrdenador.innerHTML = ord1.toString();
});


//CREAR PORTATIL
let botonCrearPortatil = document.getElementById('btnCrearPortatil');
let propPortatil = document.getElementById('propPortatil');

botonCrearPortatil.addEventListener('click', () => {
    laptop1 = new Portatil('SAMSUNG', 'Galaxy');
    propPortatil.innerHTML = laptop1.toString();
});
