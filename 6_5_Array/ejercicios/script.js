//1. Solicita una cadena al usuario e indica la cantidad de veces 
//  que aparece la a en las palabras impares

function ejercicio1(){
    var cadena = new String("HOLA CARACOLA, ¿CUANTAS A HAY EN LAS PALABRAS IMPARES?");
    console.log(cadena);
    var cadenaArray = cadena.split(" ");
    console.log(cadenaArray);
}

ejercicio1();

//2. Solicita una cadena al usuario y devuélvela invertida 
//Ej: "Hola, ¿qué tal estás?" -> estás? tal ¿qué Hola,