'use strict';


const io = require('socket.io')(3000);


io.on('connection', (socket) => {
  console.log(`socket ${socket.id} has connected`);

  socket.on('save', (payload) => {
    io.emit('save', payload);
  });

  socket.on('err', (payload) => {
    io.emit('err', payload);
  });
});