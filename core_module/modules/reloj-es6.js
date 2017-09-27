'use strict'

var clock = (() => {

        var EventEmitter = require('events').EventEmitter,
            inherits = require('util').inherits

        //constructor de la clase
        var clock = function() {
            var self = this

            setInterval(function() {
                self.emit('tic-tac')
            }, 1000)
        }

        inherits(clock, EventEmitter);

        clock.prototype.theTime = function() {
            function addZero(num) {
                return (num < 10) ? ('0' + num) : num
            }
            var date = new Date(),
                hrs = addZero(date.getHours()),
                min = addZero(date.getMinutes()),
                seg = addZero(date.getSeconds()),
                msg = hrs + ':' + min + ':' + seg;

            console.log(msg);

        }

        return clock;
    })() //Funcion anomnima autoejectuable

module.exports = clock