/*Realiza un script que cuente el número de vocales que tiene un texto. */

let texto = prompt("Ingrese el texto");
let letra;
let contador = 0;
for (let i = 0; i < texto.length; i++) {
    letra = texto[i];
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        contador ++;
    }
}
document.write(contador);