// Utilizando objetos Boolean realiza un programa que indique si un array de 6 elementos solicitado al usuario se encuentra ordenado de la siguiente forma (e1 > e3, e2 < e4 y e5 = e6)
var array = [1,2,3,4,5,5];

condicion1 = new Boolean(array[0] > array[2]);
condicion2 = new Boolean(array[1] < array[3]);
condicion3 = new Boolean(array[4] == array[5]);

//console.log(condicion1.valueOf());
//console.log(condicion2.valueOf());
//console.log(condicion3.valueOf());

condicion1.valueOf() && condicion2.valueOf() && condicion3.valueOf() ? alert("Se cumplen las condiciones") : alert("Ohh! No se cumplen TODAS condiciones")

var x = new Boolean(false);
console.log(x);
var x2 = false;
console.log(x2);