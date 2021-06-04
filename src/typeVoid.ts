/*
  void es lo opuesto de any:
  representa la ausencia de tipo

  comunmente se usa como tipo de retorno en funciones
*/

//Explicito
function showInfo (user : any) : any {
  console.log('User Info: ', user.id, user.username, user.cellphone);
  // return 'Hola'
};

showInfo({id: 1, username:'Maga', cellphone:9780978561});

//Inferido
function showFormatedInfo (user : any) {
  let userInfo : string = `
    user ID : ${user.id}
    User Name : ${user.username}
    Cellphone : ${user.cellphone}
  `;
  console.log('PRINT: ', userInfo)
};

showFormatedInfo({id: 1, username:'Maga', cellphone:9780978561});

// void como tipo de dato en una variable
let unusable : void;
// unusable = null; //Error
unusable = undefined;
