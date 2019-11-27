'use strict';

const fs = require('fs');
const util = require('util');
const faker = require('faker');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

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

let file = process.argv.slice(2).shift();
alterFile(file);

//requires a filename via command line args and changes
// the content with faker 