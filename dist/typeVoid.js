function showInfo(user) {
    console.log('User Info: ', user.id, user.username, user.cellphone);
}
;
showInfo({ id: 1, username: 'Maga', cellphone: 9780978561 });
function showFormatedInfo(user) {
    let userInfo = `
    user ID : ${user.id}
    User Name : ${user.username}
    Cellphone : ${user.cellphone}
  `;
    console.log('PRINT: ', userInfo);
}
;
showFormatedInfo({ id: 1, username: 'Maga', cellphone: 9780978561 });
let unusable;
unusable = undefined;
