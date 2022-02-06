/* Escribir un programa que escriba en pantalla los divisores comunes de dos números dados*/

let a = prompt("Ingresa un numero entero:");
let b = prompt("Ingresa un numero entero:");
a=parseInt(a);
b=parseInt(b);
if (!(isNaN(a)) && !(isNaN(b))) {
    if (a>b) {
        for (let i = 0; i <= a; i++) {
            if (a%i==0 && b%i==0) {
                document.write(`El numero ${i} es divisor de ${a} y de ${b}`+"<br>");
            }
        }
    }else{
        for (let i = 0; i<=b; i++) {
            if (a%i==0 && b%i==0) {
                document.write(`El numero ${i} es divisor de ${a} y de ${b}`+"<br>");
            }
        }
    }
} else {
    alert("No es numero");
}

