let sentence = prompt("Escribe una frase por favor:");
//let nws = sentence.replace(/a/ig, "");
let res = (sentence.length) - ((sentence.replace(/a/ig, "")).length);

if (res!=0) {
    alert("La oracion repite letra 'a' "+res+" veces");
} else {
    alert("La oracion no continen la letra 'a' ");
}