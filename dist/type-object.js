let user;
user = {};
user = {
    id: 1,
    username: 'magician',
    firstName: 'Maria',
    isPro: true
};
const newuser = user;
user = Object.assign(Object.assign({}, user), { username: 'maga' });
console.log('user: ', user);
console.log('newuser: ', newuser);
const myObj = {
    id: 1,
    username: 'magician',
    firstName: 'Maria',
    isPro: true
};
const isInstance = myObj instanceof Object;
console.log('isInstance: ', isInstance);
console.log('user: ', myObj.username);
