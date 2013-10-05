var servidor = require('http');
var url = require('url');
var fs = require('fs');

function iniciar(enrutar, manejador){

    function arrancaServidor(requiere, respuesta){
        ruta =  url.parse(requiere.url).pathname;
        var contenido = enrutar(manejador, ruta, respuesta);
        var log =  fs.createWriteStream('log.txt',{
            'flags':'a'
        });
        log.write(ruta + '\n');
        /*respuesta.writeHead(200, {'content-Type':'text/html'});
        respuesta.write("<h1>Pagina actual: </h1>"+contenido);
        respuesta.end();*/
    }
    servidor.createServer(arrancaServidor).listen(8080);
}

exports.iniciar =  iniciar;