function inicio(respuesta){
    console.log('Has ingresado a la pagiuna de inicio');
//    var ahora =  new Date().getTime();
//    while(new Date().getTime() < ahora + 10000);
    respuesta.writeHead(200, {'content-Type':'text/html'});
    respuesta.write("<h1>Pagina actual: Inicio </h1>");
    respuesta.end();
}
function pagina1(respuesta){
    console.log('Has ingresado a la pagiuna de pagina1');
    respuesta.writeHead(200, {'content-Type':'text/html'});
    respuesta.write("<h1>Pagina actual: pagina1 </h1>");
    respuesta.end();
}
function pagina2(respuesta){
    console.log('Has ingresado a la pagiuna de pagina2');
    respuesta.writeHead(200, {'content-Type':'text/html'});
    respuesta.write("<h1>Pagina actual: pagina2 </h1>");
    respuesta.end();
}
function favicon(respuesta){
    console.log('Se ha pedido el favicon');
    respuesta.writeHead(200, {'content-Type':'text/html'});
    respuesta.write("");
    respuesta.end();
}
exports.inicio =  inicio;
exports.pagina1 =  pagina1;
exports.pagina2 =  pagina2;
exports.favicon = favicon;