/*
  Any
  Usado para capturar valores dinamicos
  Los valores pueden cambiar de tipo en el tiempo: APIs Externas, Libreria de terceros
*/

// Explicito
let idUser : any;

idUser = 1; // number
idUser = '1'; // string

// Inferido
let otherId;
otherId = 1; // number
otherId = '1'; // string
otherId = true; // bool

let surprise : any = 'Hola Mundo!';
// surprise.sayHellow(); // error
const rest = surprise.substring(4);

console.log('Id: ', idUser, otherId);
console.log('surprise: ', rest);

