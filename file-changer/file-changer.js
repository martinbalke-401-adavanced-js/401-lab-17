'use strict';

const fs = require('fs');
const util = require('util');
const faker = require('faker');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

//Turning the return from fs read and write in to a promise to make it easier to use with async/await
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//Filepath gotten from the command line arguments 
let file = process.argv.slice(2).shift();

/**
 * Alter file takes in a string which is the path to a file on the system and alters the contents of that file with faker
 * @param {string} file - The path to the file given via command line arguments
 * @fires save - Emmits an event to the socket server showing that the file was saved successfully
 * @fires err - Emmits an event to the socket server showing there was an error 
 */
const alterFile = async file => {
  try {
    let contents = await readFile(file);
    await writeFile(file, faker.lorem.sentence());
    socket.emit('save', {status: 1, file, message: `File saved successfully`, contents});
    console.log(`${file} saved`);
  } catch (error) {
    socket.emit('err',{ status: 0, file, message: error.message});
  }
};

alterFile(file);

