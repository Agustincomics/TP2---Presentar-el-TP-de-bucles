/* Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */

let filas = parseInt(prompt("Ingrese el numero de filas:"));
let columnas = parseInt(prompt("Ingrese el numero de columnas:"));
let resultado = filas * columnas
for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        document.write(resultado + " ");
        resultado--;
    }
    document.write("<br>");
} 
