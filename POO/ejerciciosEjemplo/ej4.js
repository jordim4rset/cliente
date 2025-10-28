class Coche{

    constructor(marca, modelo, anyo){
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
    }

    detalles() {
        return `${this.marca}, ${this.modelo}, ${this.anyo}`;
    }
}

const coche1 = new Coche('Mercedes','clase c',2025);
const coche2 = new Coche('Porsche','911',2020);

console.log(coche1.detalles());
console.log(coche2.detalles());
