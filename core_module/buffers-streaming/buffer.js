'use strict'

let buf = new Buffer(100),
    buf2 = new Buffer(26),
    str = '\u00bd + \u00bc + \u00be'


buf.write('abcd', 0, 4, 'ascii');

console.log(
    buf,
    buf.toString('ascii'),
    str,
    str.length + ' caracteres',
    Buffer.byteLength(str, 'utf-8') + ' bytes',
    buf2.length
);
for (var i; i < buf2.length; i++) {
    buf2[i] = i + 97;
}

console.log(buf2.toString('ascii'));