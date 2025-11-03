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

let valorX1;
let valorY1;
let valorX2;
let valorY2;
let btnCrearRec1 = document.getElementById('btnCrearRec1');
let btnCrearRec2 = document.getElementById('btnCrearRec2');
let rec1 = document.getElementById('rec1');
let rec2 = document.getElementById('rec2');

btnCrearRec1.addEventListener('click', () => {
    valorX1 = document.getElementById('x1');
    valorY1 = document.getElementById('y1');

    let rectangulo1 = new Rectangulo(valorX1.value, valorY1.value);
    

    rec1.style.width = valorX1.value+"px";
    rec1.style.height = valorY2.value+"px";
    console.log(rectangulo1);
});

btnCrearRec2.addEventListener('click', () => {
    valorX2 = document.getElementById('x2');
    valorY2 = document.getElementById('y2');

    let rectangulo2 = new Rectangulo(valorX2.value, valorY2.value);
    console.log(rectangulo1);

    rec2.style.width = valorX2.value + "px";
    rec2.style.height = valorY2.value + "px";
});