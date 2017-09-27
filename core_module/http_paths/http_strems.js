//Creacion de web server con stream estatico
'use strict'

var http = require('http').createServer(webServer), // Llamando al modulo http
    fs = require('fs')


function webServer(req, res) {
    function readFile(err, data) {
        if (err) throw err
        res.end(data)
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('assets/index.html', readFile);
}

//Crear el server
http.listen(3000);

console.log('server running in http://localhost:3000/');