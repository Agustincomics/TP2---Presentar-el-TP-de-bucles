/* Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

let frase = prompt("Ingrese una frase");
let confirmacion = confirm("¿Quieres continuar?");
document.write(frase + " - ");


while (confirmacion != false) {
   frase = prompt("Ingrese una frase");
   confirmacion = confirm("¿Quieres continuar?");
   document.write(frase + " - ");
} 

/* do {
    let frase = prompt("Ingrese una frase");
    let confirmacion = confirm("¿Quieres continuar?");
} while (confirmacion == true); */