'use strict'

var EventEmitter = require('events').EventEmitter,
    inherits = require('util').inherits

var clock = function() {
    var self = this

    setInterval(function() {
        self.emit('tic-tac')
    }, 1000)
}

inherits(clock, EventEmitter);

clock.prototype.theTime = function() {
    var date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        seg = date.getSeconds(),
        msg = hrs + ':' + min + ':' + seg;

    console.log(msg);


}

var cucu = new clock();

cucu.on('tic-tac', () => {
    cucu.theTime()
})