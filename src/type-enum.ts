/*
  ENUM:
    - Los enumerados permiten definir un conjuto de constantes con nombre
    - Tienen la ventaja de adaptarse al contexto de la aplicación
*/


//Orientacion para fotos

// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
  Landscape = 10,
  Portrait,
  Square,
  Panorama
};  

const landscape : PhotoOrientation = PhotoOrientation.Landscape;
const portrait : PhotoOrientation = PhotoOrientation.Portrait;
const square : PhotoOrientation = PhotoOrientation.Square;

console.log('portrait: ', portrait);
console.log('portrait: ', PhotoOrientation[portrait]);

enum DiasLaborales {
  Lunes = 'MON',
  Martes = 'TUE',
  Miercoles = 'WED',
  Jueves = 'THU',
  Viernes = 'FRI'
}

enum DiasFinSemana {
  Sabado = 'SAT',
  Domingo = 'SUN'
}

// const Semana = {
//   ...DiasLaborales,
//   ...DiasFinSemana
// }

let Semana = Object.assign({}, DiasLaborales, DiasFinSemana); //Extender

console.log(Semana); // MON
// console.log(Semana.Sabado); // SAT

