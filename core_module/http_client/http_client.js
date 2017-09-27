'use strict'

var http = require('http'),
    options = {
        host: 'bextlan.com',
        port: 3000,
        path: '/'
    }

http.get(options, (res) => {
        console.log(`El sitio ${options.host} ha respondido. Codigo de estado: ${res.statusCode}`)
    })
    .on('error', function(err) {
        console.log(`Error: ${err.statusCode}}`)
    })