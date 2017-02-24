var static = require('node-static');
var express = require('express');
var app = express();
var file = new(static.Server)();
var fs = require('fs');
var options = {
    //key: fs.readFileSync('HTTPS_Permissions/key.pem'),
    //cert: fs.readFileSync('HTTPS_Permissions/cert.pem')
};  // Here the Permissions related to HTTPS are stored in the HTTPS_Permissions Folder

app.listen(process.env.PORT || 3000, function() {
     console.log('PeerChat launched.')
});

var io = require('socket.io').listen(app);
io.sockets.on('connection', function(socket) {


    socket.on('message', function(message) {
        socket.broadcast.emit('message', message);
    });

   socket.on('chat', function(message) {
        socket.broadcast.emit('chat', message);
    });

    socket.on('create or join', function(room) {
        var numClients = io.sockets.clients(room).length;

        if (numClients === 0) {
            socket.join(room);
            socket.emit('created', room);
        } else if (numClients == 1) {

            io.sockets. in (room).emit('join', room);
            socket.join(room);
            socket.emit('joined', room);
        } else {
            socket.emit('full', room);
        }
        socket.emit('emit(): client ' + socket.id + ' joined room ' + room);
        socket.broadcast.emit('broadcast(): client ' + socket.id + ' joined room ' + room);

    });

});
