//1. Solicita una cadena al usuario e indica la cantidad de veces 
//  que aparece la a en las palabras impares

function apareceA(palabra){
    var cont = 0;
    for(letra of palabra){
        if(letra.toLowerCase() == "a"){
                cont++
        }
    }
    return cont;
}

function ejercicio1(){
    var cadena = new String("HOLA CARACOLA, ¿CUANTAS A HAY EN LAS PALABRAS IMPARES?");
    var cadenaArray = cadena.split(" ");
    var cont = 0;
    cadenaArray.forEach((palabra, index) => {
        if(index%2 != 0){
            console.log("En la palabra '"+palabra+"': aparece "+apareceA(palabra) +" vez/veces.")
        }
    });

}

//ejercicio1();

//2. Solicita una cadena al usuario y devuélvela invertida 
//Ej: "Hola, ¿qué tal estás?" -> estás? tal ¿qué Hola,

function ejercicio2(){
    var cadena = "Hola, ¿qué tal estás?";
    var cadenaArray = cadena.split(" ");
    var cadenaInvertida  = "";

    for(let i = cadenaArray.length-1; i >= 0;i--){
        cadenaInvertida += cadenaArray[i] +" ";
    }

    console.log(cadenaInvertida);
}

ejercicio2()