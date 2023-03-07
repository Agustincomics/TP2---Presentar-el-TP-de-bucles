/* Crea script para generar pirámide
siguiente con los números del 1 al número 
que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 */

let max = prompt("Ingrese el numero maximo");

for (let i = 1; i <= max; i++) {

    for (let r = 1; r <= i; r++) {
        document.write(r);
    }
    document.write("<br>");
}