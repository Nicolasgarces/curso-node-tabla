const { crearArchivo } = require ('./helpers/multiplicar'); // aqui hacemos un tipo de importacion
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();

crearArchivo( argv.b, argv.l, argv.h)//ejecutamos la funcion
   .then( nombreArchivo => console.log(nombreArchivo.random, 'creado'))
   .catch( err => console.log(err));