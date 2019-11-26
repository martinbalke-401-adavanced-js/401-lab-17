'use strict';


const io = require('socket.io')(3000);


io.on('connection', () => { 
  console.log('socket connected');
});

