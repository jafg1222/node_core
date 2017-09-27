'use strict'

var http = require('http').createServer(webServer), // Llamando al modulo http
    fs = require('fs'),
    index = fs.createReadStream('assets/index.html') //Lee el index.html para servirlo


function webServer(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    index.pipe(res) //pipe transimete el stream
}

//Crear el server
http.listen(3000);

console.log('server running in http://localhost:3000/');