'use strict'

var Clock = require('./reloj-es6.js'),
    cucu = new Clock();

cucu.on('tic-tac', () => {
    cucu.theTime()
})