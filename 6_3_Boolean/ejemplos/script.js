var x1 = new Boolean(false);
var x2 = new Boolean(false);
console.log(x1);

if (x1) { //Dirección de memoria
    console.log("Entro en el if");
}else{
    console.log("No entro en el if");
}

console.log(x1==false);
console.log(x1===false);
console.log(x1==true);
console.log(x1==x2); //Direcciones de memoria
console.log(x1===x2); //Direcciones de memoria
console.log(JSON.stringify(x1) == JSON.stringify(x2)); //Pasamos el objeto a string y comparamos

var x3 = false;
if (x3) { //false
    console.log("Entro en el if");
}else{
    console.log("No entro en el if");
}

console.log(x2.toString());
var x4 = x2.toString(); //Convierte a cadena de caracteres
console.log(x4[0] + " " +x4[1] + " " + x4.charAt(2) + " " + x4.charAt(3) + ` ${x4[4]}`);
console.log(x2.valueOf());
console.log(typeof(x1));
console.log(typeof(x3));
console.log(typeof(x2.valueOf));
console.log(typeof(x2.valueOf()));

console.log("----------------------------------");
console.log(Boolean(1 > 3));    //booleano
console.log(!!(7 > 3));         //booleano 
console.log(new Boolean(7 > 3)); //dirección de memoria
console.log(typeof(Boolean(1 > 3)));//booleano
console.log(Boolean(1 > 3));    //booleano
console.log(!!(7 > 3));         //booleano 
console.log(new Boolean(7 > 3)); //dirección de memoria
console.log(typeof(Boolean(1 > 3)));//booleano
console.log(typeof(Boolean));//Función

console.log(Boolean("Hola"));   //true
console.log(Boolean([1,2,3]));  //true
console.log(Boolean(new String("Hola")));   //true
console.log(typeof(Boolean(new String("Hola"))));   //boolean