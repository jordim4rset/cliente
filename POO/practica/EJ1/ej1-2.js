class Rectangulo{

    //CONSTRUCTOR
    constructor(ancho, alto){
        this.ancho = this.validarDatos(ancho);
        this.alto = this.validarDatos(alto);
    }

    //MÉTODO VALIDAR DATOS
    validarDatos(dato){
        if(dato <= 0){
            return 1;
        }else{
            return dato;
        }
    }

    //MÉTODO CAMBIAR DIMENSIONES RECTANGULO
    cambiarDimensiones(ancho, alto){
        this.ancho = this.validarDatos(ancho);
        this.alto = this.validarDatos(alto);
    }

    //MÉTODO CALCULAR AREA
    calcularArea(){
        return this.alto * this.ancho;
    }

    //MÉTODO COPIAR RECTANGULO
    copiar(){
        return new Rectangulo(this.ancho, this.alto);
    }

    //MÉTODO COMPARAR RECTANGULOS
    comparar(rec){
        if(this.calcularArea() > rec.calcularArea()){
            return 'mayor';
        }else if(this.calcularArea() == rec.calcularArea()){
            return 'igual';
        }else{
            return 'menor';
        }
    }
}

//MEDIDAS RECTANGULOS
let y1 = document.getElementById('y1');
let x1 = document.getElementById('y1');
let y2 = document.getElementById('x1');
let x2 = document.getElementById('x2');
let btn1 = document.getElementById('btnCrearRec1');
let btn2 = document.getElementById('btnCrearRec2');
let rec1;
let rec2;

btn1.addEventListener('click', () => {
    rec1 = new Rectangulo(x1.value, y1.value);
    console.log(rec1);
});

btn2.addEventListener('click', () => {
    rec2 = new Rectangulo(x2.value, y2.value);
    console.log(rec2);
});












