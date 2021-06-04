// Data types

//Bool
let isPro : boolean = true;

// number
let phone : number = 978097851;
let hex : number = 0x37CF;
let binari : number = 0b1010;
let octal : number = 0o755;

// string
let username : string = 'Maria Gabriela';
// username = true; // error

// Template String
// Uso de back-tick
let userInfo : string = `
  User Name : ${username}
  Full Name : ${username + ' Lopez'}
  Cellphone : ${phone}
  Pro : ${isPro ? 'Senior' : 'Junior'}
`;

console.log('Print: ', userInfo);