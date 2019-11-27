'use strict';

//IO is a reference to the server we have created for our sockets
const io = require('socket.io')(3000);

/**
 * Io.on allows us to listen for an event on our server in this case a connection from another socket
 * Once the socket connects we have access to it and use it's properties to broadcast events
 * @param {Object }socket - the socket that has connected to our server
 */
io.on('connection', (socket) => {
  console.log(`socket ${socket.id} has connected`);
  //Listening for the save event then broadcasting to the socket server
  socket.on('save', (payload) => {
    io.emit('save', payload);
  });
  //Listening for the err event then broadcasting to the socket server
  socket.on('err', (payload) => {
    io.emit('err', payload);
  });
});