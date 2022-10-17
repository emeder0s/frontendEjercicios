function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6

console.log(sum.apply(this, [4, 5, 6])); //15

const numbers2 = [1, 2, 3, 5];
console.log(sum(...numbers2)); // 6

let miArray = [2, 5, 7, 1, 9];
    let minimo = Math.min(...miArray);
    console.log(minimo);

    let misConocimientos = ['variables', 'operadores', 'estructuras de control', 'funciones'];
    let aprendido = ['spread', 'local storage'];
    let misConocimientosAmpliados = [...misConocimientos, ...aprendido, 'otra cosa más'];
    console.log(misConocimientosAmpliados);

    const user1 = { 
        name: 'Jen', 
        age: 22, 
    }; 
    
    const user2 = { 
        name: "Andrew", 
        location: "Philadelphia" 
    }; 

    const mergedUsers = {...user1, ...user2}; 
    console.log(mergedUsers) 