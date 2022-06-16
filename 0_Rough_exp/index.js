
// Global Object

var a = '1'
let b = '2'
const c = '3'

global.console.log(a + b + c)

// Bellow code returns undefined
// because the scope of the a, b, c is reside in the file index.js
// this does not work like window object in browser

console.log(global.a)
console.log(global.b)
console.log(global.c)

// modules

const messageService = require('./messageService');

console.log(messageService('messages'));
console.log(module);


// path module
const path = require('path');
const pathObj = path.parse('./index.js');

console.log(pathObj);


// os module
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total memory is ${totalMemory} and Free Memory is ${freeMemory}`);


// Event module
const EventEmitter = require('events')
const myEmitter = new EventEmitter();

// Register a listener
// When an event raised it check all the event in the register where a listener listen for event 
myEmitter.on("RaiseAClickEvent", function (arg) {
    console.log("Button Event Clicked", arg);
})

// Event Raised
myEmitter.emit("RaiseAClickEvent", { id: 1, path: "url" });


// HTTP module
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Home Page");
        res.end();
    }
    if (req.url === '/api/node') {
        res.write(JSON.stringify(["http", "Event"]));
        res.end();
    }
});

server.listen(3000);

// But in real world we don't use above method to create server
// because this consists more routes.

// writing above jargon code in express
// refer 6_express

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/api/data', (req, res) => {
    res.send(JSON.stringify(["Node JS", "PHP", "JAVA"]));
});

app.listen(3000, () => console.log("Listening on port 3000"));


// Read Route parameter
// refer 6_express