"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users;
users = ['Samira', 'Maroon', 'Manuel', 'Veronika'];
let othersUsers = ['Samira', 'Maroon', 'Manuel', 'Veronika'];
let pictureTitles;
pictureTitles = ['Landscape', 'Vacations time', 'Favorite sunset'];
let user;
user = [1, 'Maga'];
let userInfo;
userInfo = [2, 'magician', true];
console.log(`
ID: ${userInfo[0]}
username: ${userInfo[1]}
senior: ${userInfo[2]}`);
let array = [];
array.push([1, 'Daniela']);
array.push([2, 'Nadia']);
array.push([3, 'Maga']);
console.log('array: ', array);
let userMaga = array.filter((element) => element[1] === 'Maga');
userMaga[0][1] = userMaga[0][1].concat('2595');
console.log('userMaga: ', userMaga[0]);
