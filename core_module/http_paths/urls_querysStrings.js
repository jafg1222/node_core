//URLS y querystrings

'use strict'

var http = require('http').createServer(webServer),
    paths = require('path'),
    url = require('url'),
    urls = [{
            id: 1,
            route: '',
            output: '<h2>home</h2>'
        },
        {
            id: 2,
            route: 'acerca',
            output: '<h2>acerca</h2>'
        }, {
            id: 3,
            route: 'contacto',
            output: '<h2>contacto</h2>'
        }
    ]

function webServer(req, res) {
    var message = '<h1>Hello NodeJS</h1>',
        pathURL = paths.basename(req.url), //Regresa la ultima porcion de la ruta
        id = url.parse(req.url, true).query.id //Toma una cadena de texto url y regresa un objeto

    console.log(`path: ${ pathURL }, id: ${id}`)

    urls.forEach((pos) => {
        if (pos.route == pathURL || pos.id == id) {
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