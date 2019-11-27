const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');


socket.on('save', (payload) => {
  console.log(payload);
  console.log(`
  File: ${payload.file} 
  Message: ${payload.message}
  File contents: ${payload.contents.toString()}`);
});

socket.on('err', (payload) => {
  console.log(`
  FILEPATH: ${payload.file} 
  ERROR MESSAGE: ${payload.message}`);
});