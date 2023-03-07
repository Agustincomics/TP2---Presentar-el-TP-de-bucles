/* 2- Escribir un programa que solicite una nota (número) de 0 a 10.
Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10
mostrar un mensaje de “número erróneo”.
Si el número ingresado no es válido mostrar el mensaje 
“Introduce un número válido”.
 */

let nota = parseInt(window.prompt("Ingrese la nota (0 a 10)"));

if (nota < 11) {

    if (nota >= 0 && nota <= 2) {
        alert(nota + " Muy deficiente");
    }

    if (nota == 3 || nota == 4 ) {
        alert(nota + " Insuficiente");
    }

    if (nota == 5 || nota == 6) {
        alert(nota + " Bien");
    }

    if (nota == 7) {
        alert(nota + " Suficiente");
    }

    if (nota == 8 || nota == 9) {
        alert(nota + " Notable");
    }

    if (nota == 10) {
        alert(nota + " Sobresaliente");
    }

} else {
    alert("Introduce un numero valido");
}
    
