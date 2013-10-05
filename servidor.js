var servidor = require('http');

function arrancaServidor(requiere, respuesta){
	//200 = todo correcto; tipo de informacion = html
	respuesta.writeHead(200, {'content-Type':'text/html'});
	//
	respuesta.write("<h1>Servidor arranco</h1>");
	respuesta.end();
}

servidor.createServer(arrancaServidor).listen(8888);