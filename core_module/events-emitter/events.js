'use strict'

var EventEmitter = require('events').EventEmitter,
    pub = new EventEmitter();

pub.on('myevent', function(message) {
    console.log(message)

});

pub.once('myevent', function(message) {
    console.log('Se emite evento por primera vez ' + message)
});

pub.emit('myevent', 'Soy un emisor de eventos');
pub.emit('myevent', 'volviendo a emitir');
pub.removeAllListeners();

pub.emit('myevent', 'volviendo a emitir por tercera vez');