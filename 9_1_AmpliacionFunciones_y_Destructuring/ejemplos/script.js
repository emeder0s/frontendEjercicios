//SPREAD

function f (x, y = 3, z = 22) {
    return x + y + z
}

console.log(f(3));
console.log(f(3,0));
console.log(f(3,0,0));

function registro (nombre, dni, email="Sin email", telefono="Sin teléfono") {
    var datos = [nombre, dni, email, telefono]
   // alert(`Ha sido registrado con los datos:\n ${datos}`);
}
registro("Davinia de la Rosa", "11111111A");


let [a, b] = [10, 20];
    console.log(a);
    console.log(b);


function imprime ([ saludo, hora ]) {
    console.log(`${saludo}, buenos ${hora}`);
}
imprime( ["hola", "dias"] ); //Quita los [] y explica lo que pasa

let c,d;
let list2 = [ 33,2,5,6 ];
[ a,b,c,d ] = list2;

console.log(list2);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

list2 = [ 33, 2, ,6 ];
[ a,b,c=9,d ] = list2;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

list2 = [33,2];
[ a,b,c=9,d ] = list2;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

const user = {
    id: 42,
    is_verified: true
};

//const {id, is_verified} = user;
const {is_verified,id} = user;

console.log(id); // 42
console.log(is_verified); // true 

//REST