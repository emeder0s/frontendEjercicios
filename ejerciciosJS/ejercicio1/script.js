/* EJERCICIO 1 - Imprime todos los números del 1 al 1000 por consola, con la salvedad de todos aquellos números que sean múltiplos de 3 que en vez de 
 * imprimir el número, se imprimirá Fizz, en los números que sean múltiplos de 5 se imprimirá Buzz, y además en los números que sean 
 * múltiplos de 3 y de 5 se imprimirá FizzBuzz.
 */

function ejercicio1(){
    for(let i=1; i<=1000;i++){
        if ((i%3 == 0 && i%5{
            console.log("FizzBuzz");
        }else if (i%5 == 0){
            console.log("Buzz");
        }else if (i%3 == 0){
            console.log("Fizz");
        }else {
            console.log(i);
        }
    }
    
}