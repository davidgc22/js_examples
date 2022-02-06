let a = prompt("Ingrese la cifra a");

a = Number(a);
b = a % 2;
if (b==0) {
    alert("El numero a: ("+a+ ") es divisible entre 2");
} else {
    alert("El numero a :("+a+") no es divisible entre 2");
}