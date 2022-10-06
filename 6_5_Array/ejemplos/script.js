// let frutas = ["Manzana", "Banana"];
// let frutasObject = new Array("Fresa", "Piña");
// let frutasObject2 = new Array(["Fresa", "Piña"]);

// console.log(frutas);
// console.log(frutasObject);
// console.log(frutasObject2);
// console.log(frutas.length);
// console.log(frutasObject.length);
// console.log(frutasObject2.length);
// console.log(frutas[0]);
// console.log(typeof(frutas));
// console.log(typeof(frutas[0]));
// console.log(typeof(frutasObject));
// console.log(typeof(frutasObject[0]));
// console.log(typeof(frutasObject2));
// console.log(typeof(frutasObject2[0]));
// console.log(typeof(frutasObject[0][1]));

console.log("-------------------MAP");
let productos = ["patatas", "pescado", "naranjas", "manzana"];
let resultado = productos.map(function (producto){return producto + " modificado!"});
console.log(resultado);
console.log(typeof(resultado));


let resultado1 = productos.map((alimento) =>{return alimento + " modificado2!"});
console.log(resultado1);

 let resultado2 = productos.map(alimento =>alimento + " modificado2!");
 console.log(resultado1);

 //Equivalente
 let resultado3 = productos.map((alimento) =>{return alimento + " modificado2!"});
 console.log(resultado3);

 // Usando MAP
 let arr = [1, 2, 3, 4, 5, 6, 7];
 let multiplyBy2 = n => n * 2;

 let arr2 = arr.map(multiplyBy2);
 console.log(arr2); // [2, 4, 6, 8, 10, 12, 14]


 // Antes de MAP
 let arr3 = [1, 2, 3, 4, 5, 6, 7];
 let arr4 = [];
 let multiplyBy2_2 = n => n * 2;

 for (let i = 0; i < arr.length; i++) {
     arr4.push(multiplyBy2_2(arr3[i]));
 }
 console.log(arr4); // [2, 4, 6, 8, 10, 12, 14]

 console.log("-------------------FILTER");
 function validar(elemento) {
    return elemento >= 10;
}

let filtrados = [false, 22, 4, 2, null, "Bye", 31].filter(validar);
console.log(filtrados);

//Equivalente 
let filtrados2 = [false, 22, 4, 2, null, "Bye", 31].filter((elemento) => {return elemento<10});
console.log(filtrados2);

console.log("-------------------FOREACH");

let frutas = ["Manzana", "Banana", "Fresa", "Piña"];

let frutasObject = new Array(["Cereza", "Papaya"], ["Pera", "Sandía"]);

// //forEach
// frutas.forEach(element => {
//     console.log(element);
// });

// //for tradicional equivalente
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);    
// }

// //forEach
// frutasObject.forEach(element => {
//     console.log(element);
// });

    //forEach 
    frutasObject.forEach(element => {
        element.forEach(element2 => {
        for(l of element2){
            console.log(l);
        }
        console.log("Fin Fruta");
        });
    });