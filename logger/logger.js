const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');


socket.on('save', (payload) => {
  console.log('saved that file');
});

socket.on('err', (payload) => {
  console.log('saved that file');
});