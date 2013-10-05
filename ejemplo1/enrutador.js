function enrutar(manejador, ruta, respuesta){
    console.log('voy a rutear algo para: '+ruta);
    if(typeof manejador[ruta] === 'function'){
        manejador[ruta](respuesta);
    } else {
        console.log('No existe una funcion par a ruta: '+ ruta)
    }
}

exports.enrutar =  enrutar;