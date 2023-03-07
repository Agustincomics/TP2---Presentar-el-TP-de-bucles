/* Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

let nombre1 = prompt("Ingrese el nombre de la primera persona");
let edad1 = parseInt(prompt("Ingrese la edad"));

let nombre2 = prompt("Ingrese el nombre de la segunda persona");
let edad2 = parseInt(prompt("Ingrese la edad"));

let nombre3 = prompt("Ingrese el nombre de la tercera persona");
let edad3 = parseInt(prompt("Ingrese la edad"));

let resultado = Math.max(edad1, edad2, edad3);

if (resultado == edad1) {
    document.write(nombre1);
    document.write(resultado);
} else if (resultado == edad2) {
    document.write(nombre2);
    document.write(resultado);
} else {
    document.write(nombre3);
    document.write(resultado);
}
