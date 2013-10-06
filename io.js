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
            sendUser();

		});

		socket.on('message', function(msg){
			sendMessage(socket.nickname, msg);
		});

		socket.on('disconnect', function(){
			sendMessage('SERVER', 'User @'+socket.nickname+' has disconnected');
            sendUser();
		});



		var sendMessage =  function(nickname, msg) {
			console.log('Recepcionando mensaje: '+msg);
			io.sockets.emit('message', nickname, msg);
		}

        var sendUser =  function() {
            var data = [],
                clients =  io.sockets.clients();
            i = 0;
            console.log('Clientes server: '+clients);
            for(var client in clients){
                client = clients[client];
                if(client.nickname != null){
                    data[i]=client.nickname;
                    console.log(data[i]);
                    i++;
                }
            }
            io.sockets.emit('users', data);
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