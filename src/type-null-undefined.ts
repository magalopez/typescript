//Explicita
let nullVar : null;
nullVar = null;
// nullVar = true; //Error

//implicito
let otherVar = null;
// otherVar = 'Hello'; //Error

console.log('nullVar: ', nullVar);
console.log('otherVar: ', otherVar);

//Undefined
let undefinedVar : undefined = undefined;
// undefinedVar = 'Melo'; //Error

let otherUndefined = undefined;
// otherUndefined = 1; //Error

console.log('undefinedVar: ', undefinedVar);
console.log('otherUndefined: ', otherUndefined);

// null and undefined : like a subtypes
// command --strictullChecks
let albumName : string;
// albumName = null; //Error
// albumName = undefined; //Error

// console.log('albumName: ', albumName);
