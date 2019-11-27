const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

/**
 * Socket .on allows us to set up an event listener in this case the event we are listening for is save
 * @param {Object} payload - The payload that was sent over during our event emitter
 */
socket.on('save', (payload) => {
  console.log(payload);
  console.log(`
  File: ${payload.file} 
  Message: ${payload.message}
  File contents: ${payload.contents.toString()}`);
});

/**
 * Socket .on allows us to set up an event listener in this case the event we are listening 
 * @param {Object} payload - The error information sent over by the event emitter
 */
socket.on('err', (payload) => {
  console.log(`
  FILEPATH: ${payload.file} 
  ERROR MESSAGE: ${payload.message}`);
});