function primeraTarea(){
    return new Promise((resolve, reject) => {
        resolve(10);
    });
}

function segundaTarea(primer){
    return new Promise((resolve, reject) => {
        resolve(primer*2);
    });
}

function terceraTarea(segun){
    return new Promise((resolve, reject) => {
        resolve(segun+5);
    });
}



primeraTarea()
    .then((resPrimera) => segundaTarea(resPrimera))
    .then((resSegunda) => terceraTarea(resSegunda))
    .then((resFinal) => {
        console.log('Res Final: ',resFinal);
    }).catch((error) => {
        console.log('Error: ',error);
    });
