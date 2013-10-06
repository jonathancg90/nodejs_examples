$(function(){
	var $login = $('#login'),
		$chat = $('#chat');
		$submit_message = $('#submit-message');
		$messages = $('#messages');
		$wait = $('#wait');

	$chat.hide();
	var socket = io.connect('/');

	socket.on('connect', function(){
		console.log('conected with socket');
		init();
	});

	var init = function(){
		$("#nickname").keyup(function(e){
			var code = e.which  || e.keyCode ;

			if(code == 13){
				setNickname($(this).val());
			}
		});
		$wait.hide();
	}

	var setNickname = function(nickname){
		socket.emit('set_nickname', nickname, function(is_available){
			if(is_available){
				console.log('Nickname: '+nickname+' is avalible' );
				setUpChat(nickname);
			} else {
				console.log('Nickname: '+nickname+' is not avalible' );
			}
			
		});
	}

	var setUpChat =  function(nickname){
		$login.hide();
		$chat.show();

		$submit_message.click(function(){
			sendMessage($messages.val());
		});

		socket.on('message', function(nickname, message){
			addMessage(nickname, message);
		});

	}

	var sendMessage =  function(message){
		socket.emit('message', message);
	}

	var addMessage =  function(nickname, message){
		$('#list-messages').append($("<li>@"+ nickname +": "+ message +"</li>"));
	}

});