import { io } from 'socket.io-client';

/*
    Clien Socket

    It is the part of the web socked architecture
    in charge of receiving the information
    distributed by the cerver 
*/

// here is the connection created
const socket = io('http://0.0.0.0:8080', {
    reconnection: true
});


// We are suscribed to the 'messages' event or channel
socket.on('message', (data) => {
    console.log(data)
})

socket.on('disconnect', (reason) => {
    console.log("client disconnected");
    if (reason === 'io server disconnect') {
      // the disconnection was initiated by the server, you need to reconnect manually
      console.log("server disconnected the client, trying to reconnect");
      socket.connect();
    }else{
        console.log("trying to reconnect again with server");
    }
    // else the socket will automatically try to reconnect
  });
