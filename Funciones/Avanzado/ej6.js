const personas = [
    {nombre: "Juan", edad: 17},
    {nombre: "Ana", edad: 22},
    {nombre:"Pedro", edad: 19},
    {nombre:"Laura", edad: 16}
];

const mayores = personas.filter(persona => persona.edad > 18);
const edades2 = mayores.map(persona => persona.edad*2);
const suma = edades2.reduce((acum, edad) => acum+edad, 0);

console.log(suma);
console.log(edades2);
console.log(mayores);