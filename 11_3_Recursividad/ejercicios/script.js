//EJERCICIO 1: Realiza la serie de fibonacci (1, 1, 2, 3, 5, 8, 13...) usando una función recursiva en Javascript.
function fibonacci(n){
    if (n==0 || n==1){
        return 1;
    }else 
        return fibonacci(n-1) + fibonacci(n-2);
}

//console.log(fibonacci(6));

//EJERCICIO 2: Realiza la suma de todos los elementos de un array numérico, usando una función recursiva en Javascript.
function suma(array,pos){
    if (pos == array.length-1){
        return array[pos];
    }else
        return array[pos] + suma(array,pos+1);
}

var array = [1,7,3,4,5,24,36,21,5,13];
var sum = suma(array,0);
//console.log(sum);

//EJERCICIO 5: Invertir un número de forma recursiva (no usar String). Ej: 1425 -> 5241
function getlength(number) {
    return number.toString().length;
}

function invertir(number, exp){
    if (exp < 0){
        return 0;
    }else{
        return number%10 * Math.pow(10, exp) + invertir(Math.floor(number/10), exp-1);
    }
}
var number = 6543
console.log(number);
console.log(invertir(number, getlength(number)-1));

//EJERCICIO 6: Haz una función que obtenga el máximo número de aun array.
function maxNum(array,pos){
    if (pos == array.length-1){
        return array[pos];
    }else
        var nextElem = maxNum(array,pos+1);
        return (array[pos] > nextElem) ? array[pos] : nextElem;
}

//console.log(maxNum(array,0));
