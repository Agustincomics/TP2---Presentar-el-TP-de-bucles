/* Realiza un script que escriba una pirámide del 1 al 30 
de la siguiente forma :

1
22
333
4444
55555
666666
…….
 */

for (let i = 1; i <= 30; i++) {

    for (let r = 0; r < i; r++) {
        document.write(i);
    }
    document.write("<br>");
}