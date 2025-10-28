let libro = {

    titulo:"Cien Años de Soledad",
    autor:"Gabriel García Marquez",
    paginas:417,
    añoPublicacion:1967,
}

for(let propiedad in libro){
    console.log(`${propiedad}:${libro[propiedad]}`);
}