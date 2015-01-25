var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connect', function (socket) {

	var ppl = {};

    console.log('socket connected');

    socket.on('disconnect', function () {
        console.log('socket disconnected');
    });

    socket.emit('text', 'You are now connected, Enjoy inText.');

    socket.on('chat message', function(msg){
		var parsed = JSON.stringify(msg);
			console.log(parsed.from + "  arrived ");
			ppl[socket.id] = parsed.from;
			console.log("message : " + msg);
			console.log("Sending to = " + socket.id);
		io.emit('chat message', msg);
	});
});

server.listen(3000, function(){
	console.log("listening");
});