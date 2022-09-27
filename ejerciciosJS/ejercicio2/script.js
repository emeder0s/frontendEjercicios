
/* EJERCICIO 2 - Bikram
 */

//variables
let variableSinValor = "";
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = 2*PI;

//booleanos
var booleanoAnd = booleano1 && booleano2;
var booleanoNot = !booleano1;
var booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

//operadores-8
var incrementarDesp = 2;
var resultadoDesp = incrementarDesp++;
//operadores-9
var incrementarAnt = 2;
var resultadoAnt= incrementarAnt++;

//bucles-10
for(let contarHasta10_2=0; contarHasta10_2<=10;contarHasta10_2++){
    console.log("La variable incrementó un valor");
}

//bucles-11
var postI = 0;
var postJ = 0;
for(let i=0; i<=11;i++){
    postI = postI + postJ++;
}

//bucles-12
var sumaPares = 0;
for(let i=0; i<10;i++){
    if (i%2==0){
        sumaPares = sumaPares + i;
    }
}

//+ variables
let variableValorNumerico = 18;
const MINOMBRE = "Elena";
const MINUMFAV = 4;

//+ booleanos
var booleanoOr = booleano1 == booleano2;
var booleanoMix1 = (booleano1 && (TAU/2 == PI)) || (variableValorNumerico >= MINUMFAV);
var seisNoEsNueve = 6 === 9;
var booleanoMix2 = variableValorNumerico > 0 ||  variableValorNumerico < -(MINUMFAV * TAU);

//+ operadores
var valorSuma = MINUMFAV + variableValorNumerico;
var valorResta = MINUMFAV - variableValorNumerico;
var valorMultiplicacion = MINUMFAV * variableValorNumerico;
var valorDivision = MINUMFAV/3;

//bucles-24
var contarHasta10 = 0;
do{
    contarHasta10++;
}while(!contarHasta10 === 10);

//bucles-25
var preI = 0;
var preJ = 0; 
for(let i=0; i<11;i++){
    preI = preI + ++preJ
}

//bucles-26
var sumaImpares = 0;
for(let i=0; i<10;i++){
    if(i%2!=0){
        sumaImpares = sumaImpares + i;
    }
}
