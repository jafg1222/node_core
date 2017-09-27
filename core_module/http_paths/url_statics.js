//URLS statics  

'use strict'

var http = require('http').createServer(webServer),
    fs = require('fs'),
    paths = require('path'),
    url = require('url'),

    urls = [{
            id: 1,
            route: '',
            output: 'assets/index.html'
        },
        {
            id: 2,
            route: 'acerca',
            output: 'assets/acerca.html'
        }, {
            id: 3,
            route: 'contacto',
            output: 'assets/contacto.html'
        }
    ]

function webServer(req, res) {
    var pathURL = paths.basename(req.url), //Regresa la ultima porcion de la ruta
        id = url.parse(req.url, true).query.id //Toma una cadena de texto url y regresa un objeto

    console.log(`path: ${ pathURL }, id: ${id}`)

    urls.forEach((pos) => {
        if (pos.route == pathURL || pos.id == id) {
            console.log('hola')
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(pos.output, (err, data) => {
                if (err) throw err
                res.end(data)
            })
        }
    })

    if (!res.finished) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.readFile('assets/404.html', (err, data) => {
            if (err) throw err
            res.end(data)
        })
    }
}

http.listen(3000);
console.log('corriendo server')