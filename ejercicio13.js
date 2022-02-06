/*Escribe un programa que pida un número y nos diga
 si es divisible por 2, 3, 5 o 7 
 (sólo hay que comprobar si lo es por uno de los cuatro)*/
let num = prompt("Ingresa un numero entero:");
num=parseInt(num);

if (!(isNaN(num))) {
    if ((num%2)==0) {
        alert("El numero ("+num+") y es divisible por 2");
    }else if ((num%3)==0) {
        alert("El numero ("+num+") y es divisible por 3");
    } else if ((num%5)==0) {
        alert("El numero ("+num+") y es divisible por 5");
    }else if ((num%7)==0) {
        alert("El numero ("+num+") y es divisible por 7");
    }else{
        alert("El numero ("+num+") no es divisible por 2, 3, 5, y 7");
    }
} else {
    alert("No es numero");
}