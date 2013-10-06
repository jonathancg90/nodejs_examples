module.exports = function(io){
	/* Eventos */
	io.sockets.on('connection', function(socket){
		console.log("Client connected");

		socket.on('set_nickname', function(nickname, callback){
			console.log('Este es tu nick: '+ nickname);
			
			avaible = isNickNameAvaible(nickname);
			if(avaible)
				socket.nickname = nickname;
			callback(avaible);
			sendMessage('SERVER', 'User @'+nickname+' has connected');

		});

		socket.on('message', function(nickname, msg){
			sendMessage(nickname, msg);
		});

		socket.on('disconnect', function(){
			sendMessage('SERVER', 'User @'+socket.nickname+' has disconnected');
		});



		var sendMessage =  function(nickname, msg) {
			console.log('Recepcionando mensaje: '+msg);
			io.sockets.emit('message', nickname, msg);
		}

		var isNickNameAvaible =  function(nickname){
			var clients =  io.sockets.clients();

			for(var client in clients){
				if(clients.hasOwnProperty(client)){
					client = clients[client];
					if(client.nickname == nickname)
						return false;
				}
			}
			return true;
		}
	});

}