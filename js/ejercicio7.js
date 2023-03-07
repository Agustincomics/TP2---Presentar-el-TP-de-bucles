/* Haz un script que escriba una pirámide inversa 
de los números del 1 al número que indique el usuario (no mayor de 50)
de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */

let max = prompt("Ingrese el numero maximo");

for (let i = max; i >= 1; i--) {

    for (let r = 0; r < i; r++) {
        document.write(i);
    }
    document.write("<br>");
}