let sentence = prompt("Escribe una frase por favor:");
sentence = sentence.toLowerCase();
let tam = (sentence.length);
let a = 0;
let e = 0;
let ih = 0;
let o = 0;
let u = 0;
let con=0;

if (tam!=0) {
    for (let i = 0; i < tam ; i++) {
        if (sentence[i]=="a") {
            a+=1;
        } else if(sentence[i]=="e"){
            e+=1;
        } else if(sentence[i]=="i"){
            ih+=1;
        } else if(sentence[i]=="o"){
            o+=1;
        } else if(sentence[i]=="u"){
            u+=1;
        }else{
            con+=1;
        }
    
    }
    if (tam!= 0){
        alert("La oracion contiene la vocal a: ("+ a+") e: ("+e+") i: ("+ih+") o: ("+o+") u: ("+u+") y el resto de carateres es de: "+con);    
    }else {
        alert("La oracion no continen vocales"); 
}
} else {
    alert("Oracion vacia");
}