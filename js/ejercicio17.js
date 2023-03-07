/*Realiza un script que muestre la posición
de la primera vocal de un texto introducido por teclado.
  */

let texto = prompt("Ingrese el texto");
let cont = 0;

for (let i = 0; i < texto.length; i++) {
   if (texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u") {
       document.write(i);
       break;
   }
}
