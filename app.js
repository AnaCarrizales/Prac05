var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');

//Se muestra el mensaje de Hello y los dos mensajes de cada función que contiene greet

emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr);// imprime los eventos de las funciones que contiene greet como funciones anónimas
emtr.emit('jump');//imprime el mensaje de la funciónde jump

