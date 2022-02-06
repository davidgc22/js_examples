let sentence = prompt("Escribe una frase por favor:");
sentence = sentence.toLowerCase();
let tam = (sentence.length);
let vocales = "";

if (tam!=0) {
    for (let i = 0; i < tam ; i++) {
        if (sentence[i]=="a"||sentence[i]=="e"||sentence[i]=="i"||sentence[i]=="o"||sentence[i]=="u") {
            vocales=vocales+sentence[i]+" ";
        } 
    
    }
    if (tam!= 0){
        alert("La oracion contiene las vocales : "+vocales);    
    }else {
        alert("La oracion no continen vocales"); 
}
} else {
    alert("Oracion vacia");
}