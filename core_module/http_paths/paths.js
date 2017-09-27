//Paths en Node JS utilidades para manejar las rutas de los directorios

'use strict'

var http = require('http').createServer(webServer),
    paths = require('path'),
    urls = [{
            route: '/',
            output: '<h2>home</h2>'
        },
        {
            route: 'acerca',
            output: '<h2>acerca</h2>'
        }, {
            route: 'contacto',
            output: '<h2>contacto</h2>'
        }
    ]

function webServer(req, res) {
    var message = '<h1>Hello NodeJS</h1>',
        pathURL = paths.basename(req.url); //Regresa la ultima porcion de la ruta

    //console.log(pathURL)

    urls.forEach((pos) => {
        console.log(pos.route + ' = ' + pathURL)
        if (pos.route == pathURL) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(message + pos.output)
        }
    })

    if (!res.finished) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Error 404 not found</h1>')
    }
}

http.listen(3000);
console.log('corriendo server')