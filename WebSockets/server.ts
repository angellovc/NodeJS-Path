

import {Server} from 'socket.io';

/*
    Web Socket Server

    Web sockets don't create an P2P interaction. It instead
    creates a server instances which is in charge of get 
    the requests from different clients and dstribute the
    responses among them. It's a centralized architecture.

*/

// It cretaes the Socket server
const io = new Server();

/*
    This is the entry point of our server
*/
io.on('connection', socket => {
    socket.emit("message","Welcome you're already connected to the web socket");

    // Every time someone send a socket petition
    // by using the event name 'message' 
    // this endpoint will be called
    socket.on('message', (id, data) => {
        console.log(id, data)
        // Every client suscribed to 'message' event
        // will get the response message
        socket.emit('message', 'response');
    })

})

// Whe have to specify the port in which the socket will run
io.listen(8080, () => {
    // The callback will be executed after the
    // server is raised successfully
    console.log('Listening at 8080')
})
