/* Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let numero = parseInt(prompt("Ingrese el numero"));
let num2 = 0;
let confirmacion = confirm("¿Quiere continuar sumando?");

while (confirmacion == true) {
    numero = numero + num2;
    num2 = parseInt(prompt("Ingrese el numero"));
    confirmacion = confirm("¿Quiere continuar sumando?");
}
document.write(numero + num2);
