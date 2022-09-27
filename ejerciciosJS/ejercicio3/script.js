//Bikram

//Arrays
var arrayVacio = [];
var arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
var arrayNumerosPares = [0,2,4,6,8];
var arrayBidimensional = [[0,1,2],['a','b','c']];

//Funciones-5
function suma(num1,num2){
    return num1 + num2;
}

//Funciones-6
function potenciacion(a,b){
    return Math.pow(a,b);
}
// console.log(potenciacion(2,3));

//Funciones-7
function separarPalabras(sentence){
    var i = 0;
    var words = 0;
    var iniWord = false;
    var sentenceArray = [];
    var word = "";

    while(i<sentence.length){
        if (sentence[i] != " "){
            word = word + sentence[i];
        }
        if (word.length>0 && sentence[i] == " " || i == sentence.length-1){
            sentenceArray.push(word);
            word = "";
        }
         i++;
    } 
    return sentenceArray;
}
//console.log(separarPalabras("hola caracola caracolita bonita"));

//Funciones-8
function repetirString(cadena,num){
    var result = "";
    for(let i=0; i<num;i++){
        result = result +" "+cadena
    }
    return result;
}
//console.log(repetirString("hola",3));

//Funciones-9
function esPrimo(num){
    var i=2;
    while(num%i != 0){
        i++;
    }
    return i==num;
}
//console.log(esPrimo(13));

//Mezclando arrays y funciones-10
function ordenarArray(){

}

//Mezclando arrays y funciones-11
function obtenerPares(array){
    var newArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i]%2==0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
// console.log(obtenerPares([1,2,3,4,5,6,7,8,9,22]));

//Mezclando arrays y funciones-12
function pintaArray(array){
    cadena = "[";
    for(let i=0; i<=array.length; i++){
        if (i == array.length){
            cadena = cadena + "]";
        }
        else if (i == array.length-1){
            cadena = cadena + array[i];
        }
        else{
            cadena = cadena + array[i] + ","
        }

    }
    return cadena
}
// console.log(pintaArray([1,2,3,4,5,6,7,8,9,22]));

//Mezclando arrays y funciones-13 -AQUI TNGO DUDAS!!
function arrayMapi(array){

}

//Mezclando arrays y funciones-14
function is_in_array(element, array){
    var i = 0;
    var encontrado = false;
    while(!encontrado && i<array.length){
        encontrado = element == array[i];
        i++;
    }
    return encontrado;
}

function eliminarDuplicados(array){
    var newArray = [];
    for(let i=0; i<array.length; i++){
        if (!is_in_array(array[i], newArray)){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
//console.log(eliminarDuplicados([4,5,4,6,7,8,6,7,8,9,4]));

//Arrays-15
var arrayNumerosNeg = [0,-1,-2,-3,-5];

//Arrays-16
var holaMundo = ['Hola','Mundo'];

//Arrays-17
var loGuardoTodo = ['hola','que', 23, 42.33,'tal'];

//Arrays-18
var arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//Funciones-19
function multiplicacion(num1,num2){
    return num1*num2;
}

//Funciones-20
function division(num1,num2){
    return num1/num2;
}

//Funciones-21
function esPar(num){
    return num%2==0;
}

//Funciones-22
function resta(num1,num2){
    return num1-num2;
}

var arrayFunciones = [suma(2,3),resta(2,3),multiplicacion(2,3)];
// console.log(arrayFunciones);

//Mezclando arrays y funciones-23
function ordenarArray2(){

}

//Mezclando arrays y funciones-24
function obtenerImpares(array){
    var newArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i]%2!=0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
// console.log(obtenerPares([1,2,3,4,5,6,7,8,9,22]));

//Mezclando arrays y funciones-25
function sumarArray(array){
    var result = 0;
    for(let i=0; i<array.length; i++){
        result = result + array[i];
    }

    return result;
}
// console.log(sumarArray([1,2,3]));

//Mezclando arrays y funciones-26
function multiplicarArray(array){
    var result = 1;
    for(let i=0; i<array.length; i++){
        result = result * array[i];
    }

    return result;
}
//console.log(multiplicarArray([2,3,4]));