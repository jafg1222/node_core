'use strict'
let stdin = process.stdin,
    stdout = process.stdout,
    person = {
        name: null,
        age: 0,
    }

function saveAge(age) {

    person.age = age;

    if (person.age >= 18) {
        stdout.write(person.name + ' es mayor de edad, tiene ' + person.age + ' años\n');
    } else {
        stdout.write(person.name + ' es menor de edad, tiene ' + person.age + ' años\n');
    }

    process.exit();

}

function Savename(name) {
    person.name = name;

    let question = 'Hola ' + person.name + ' ¿Cuantos años tienes?';

    quiz(question, saveAge);
}

function quiz(question, callback) {

    stdin.resume(); //Lee la terminal de comandos
    stdout.write(question + ': '); //Escribe en la terminal de comandos 

    stdin.once('data', (res) => {
        callback(res.toString().trim());
    }); //Ejecuta una sola vez mientras haya datos

}

stdin.setEncoding('utf-8');
quiz('¿Como te llamas?', Savename);