/*
  object es el tipo de dato que representa un valor no primitivo
  es el tipo para variable que no sea number, string, bool, null, undefined, etc.
*/

//Explicito
let user : object; 
user = {}; //object

user = {
  id : 1,
  username : 'magician',
  firstName : 'Maria',
  isPro: true
};

const newuser = user;

user = {...user, username: 'maga'};

console.log('user: ', user);
console.log('newuser: ', newuser);



// Object vs object(Clase JS  vz tipo TS)
const myObj = {
  id : 1,
  username : 'magician',
  firstName : 'Maria',
  isPro: true
}

const isInstance = myObj instanceof Object;
console.log('isInstance: ', isInstance);
console.log('user: ', myObj.username);

  