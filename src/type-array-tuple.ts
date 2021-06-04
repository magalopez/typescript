// Corchetes []

//Explicito
let users : string[];
users = ['Samira', 'Maroon', 'Manuel', 'Veronika'];
// users = [1, true, 'test']; //Error

//Inferido
let othersUsers = ['Samira', 'Maroon', 'Manuel', 'Veronika'];
// othersUsers = [1, true, 'test']; //Error


//Array<TYPE>
let pictureTitles : Array<string>;
pictureTitles = ['Landscape', 'Vacations time', 'Favorite sunset'];


//Accediendo a los valores en un array
// console.log('user: ', users[3]);
// console.log('pictureTitles: ', pictureTitles[2]);

//Propiedades en array

// users.push('Maga Lopez');
// users.sort();
// console.log('users: ', users.length);
// console.log('user: ', users);


/*
TUPLE: 
  - Las tuplas permiten expresar un arreglo con un numero fijo de elementos 
  - Los tipos de datos son conocidos
  - Los tipos de datos deben ser diferentes

  Una tupla en TypeScript es un array de elementos que están tipados. 
  De esta manera cada vez que haya que insertar un elemento se validará 
  que dicho elemento coincida con el tipo de dato establecido en la tupla.
*/

export {};

let user : [number, string];
user = [1, 'Maga'];

// console.log(user);
// console.log('ID: ', user[0]);
// console.log('username: ', user[1].length);

//Tuples con varios valores

let userInfo : [number, string, boolean];
userInfo = [2, 'magician', true];
console.log(`
ID: ${userInfo[0]}
username: ${userInfo[1]}
senior: ${userInfo[2]}`)

//Array de Tuples
// let array : [number, string][] = []; //notacion 1
let array : Array <[number, string]> = []; //notacion 2
array.push([1,'Daniela']);
array.push([2,'Nadia']);
array.push([3,'Maga']);

console.log('array: ', array);

//Uso de funciones Array
let userMaga = array.filter((element) => element[1] === 'Maga');
userMaga[0][1] = userMaga[0][1].concat('2595');
console.log('userMaga: ', userMaga[0]);

