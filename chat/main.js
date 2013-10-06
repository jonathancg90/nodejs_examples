/* Variables estaticas */
var PORT = process.env.PORT || 8080;
/*Dependencias*/
var express = require('express'),
	io = require('socket.io'),
	http = require('http');
/*Creando servidor*/
var app =  express(),
	server = http.createServer(app),
	io = io.listen(server);

	server.listen(PORT);

/*Configuraciones*/

app.configure(function(){
	app.use(express.static(__dirname + '/static'));
});

io.configure(function(){
	io.disable('log');
});

/* Rutas */ 
app.get('/',function(request, response){
   response.render('main.jade');
});

require('./io')(io);