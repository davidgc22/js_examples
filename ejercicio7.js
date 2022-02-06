let a = prompt("Ingrese la cifra a");
let b = prompt("Ingrese la cifra b");
let c = prompt("Ingrese la cifra c");

a = Number(a);
b = Number(b);
c = Number(c);

if (a>b && a>c) {
    alert("El numero a: ("+a+ ") es mayor que b: ("+b+") y que c:"+c);
} else if (b>a && b>c) {
    alert("El numero b: ("+b+") es mayor que a: ("+a+") y que c"+c);
} else {
    alert("El numero c :("+c+") es mayor que a:("+a+") y que b:"+b);
}