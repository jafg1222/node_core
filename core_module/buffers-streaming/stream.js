'use strict'

let fs = require('fs');
let readStream = fs.createReadStream('./nombres.txt');
let writeStream = fs.createWriteStream('./nombres_copia.txt');

readStream
    .pipe(writeStream) // Canal de informacion

readStream
    .on('data', (chunk) => {
        console.log('He leido: ', chunk.length, ' Caracteres');
    })
    .on('end', () => {
        console.log('Termine de leer el archivo');
    })