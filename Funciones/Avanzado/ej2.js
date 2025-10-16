const productos = [
    {nombre: "Camiseta", precio: 20},
    {nombre: "Pantalon", precio: 30},
    {nombre: "Zapatos", precio: 50},
];

productos.forEach(function(producto, indice){
    producto['precio'] *= 1.1;
});

console.log(productos);