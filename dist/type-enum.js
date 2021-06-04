var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 10] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 11] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 12] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 13] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
const landscape = PhotoOrientation.Landscape;
const portrait = PhotoOrientation.Portrait;
const square = PhotoOrientation.Square;
console.log('portrait: ', portrait);
console.log('portrait: ', PhotoOrientation[portrait]);
var DiasLaborales;
(function (DiasLaborales) {
    DiasLaborales["Lunes"] = "MON";
    DiasLaborales["Martes"] = "TUE";
    DiasLaborales["Miercoles"] = "WED";
    DiasLaborales["Jueves"] = "THU";
    DiasLaborales["Viernes"] = "FRI";
})(DiasLaborales || (DiasLaborales = {}));
var DiasFinSemana;
(function (DiasFinSemana) {
    DiasFinSemana["Sabado"] = "SAT";
    DiasFinSemana["Domingo"] = "SUN";
})(DiasFinSemana || (DiasFinSemana = {}));
let Semana = Object.assign({}, DiasLaborales, DiasFinSemana);
console.log(Semana);
