/* Escribir un programa que escriba en pantalla los divisores de un número dado*/

let num = prompt("Ingresa un numero entero:");
num=parseInt(num);

if (!(isNaN(num))) {
    for (let i = 0; i <= num; i++) {
        if (num%i==0) {
            document.write(`El numero ${i} es divisor de ${num}`+"<br>");
        }
        
    }
} else {
    alert("No es numero");
}