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

//RECTANGULO 1
let botonCrear = document.getElementById('btnCrear');
let propiedadesRec1 = document.getElementById('propiedadesRec');
let rectangulo1;

botonCrear.addEventListener('click', () => {
    rectangulo1 = new Rectangulo(10,20);

    propiedadesRec1.innerHTML = 'Alto: '+rectangulo1.alto+' <br> Ancho: '+rectangulo1.ancho;
});

//RECTANGULO 2
let botonCrear2 = document.getElementById('btnCrear2');
let propiedadesRec2 = document.getElementById('propiedadesRec2');
let rectangulo2;
let propiedadesRec2Cambiar = document.getElementById('propiedadesRec2Cambiar');

botonCrear2.addEventListener('click', () => {
    rectangulo2 = rectangulo1.copiar();
    propiedadesRec2.innerHTML = 'Alto: '+(rectangulo2.alto)+' <br> Ancho: '+rectangulo2.ancho;
});

//CAMBIAR PROPIEDADES

let botonCambiar = document.getElementById('btnCambiar');

botonCambiar.addEventListener('click', () => {
    let cajaAlto = document.getElementById('alto');
    let cajaAncho = document.getElementById('ancho');

    let valorAlto = cajaAlto.value;
    let valorAncho = cajaAncho.value;

    rectangulo2.cambiarDimensiones(valorAncho, valorAlto);
    propiedadesRec2Cambiar.innerHTML = 'Alto: '+(rectangulo2.alto)+' <br> Ancho: '+rectangulo2.ancho;
});

//CALCULAR AREA

let pArea = document.getElementById('area');
let btnArea = document.getElementById('btnArea');

btnArea.addEventListener('click', () => {
    pArea.innerHTML = rectangulo2.calcularArea();
});

//COMPARAR REC 1 Y REC 2

let btnComparar = document.getElementById('btnComparar');
let pComparar = document.getElementById('pComparar');

btnComparar.addEventListener('click', () => {
    pComparar.innerHTML = rectangulo1.comparar(rectangulo2);
});


























