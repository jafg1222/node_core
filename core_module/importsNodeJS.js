const os = require('os');
const fs = require('fs');
const fn = require('./functions/appFunctions.js');

let cpu = os.cpus();
/*
fs.appendFile('informacion.txt', 'informacion de cpu: ' + JSON.stringify(cpu), function(error) {
    if (error) {
        console.log('error al crear el archivo');
    }
});
*/
console.log(fn.areaRectangulo(2, 3));