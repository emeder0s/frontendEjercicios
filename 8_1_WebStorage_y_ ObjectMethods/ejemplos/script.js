
//EJEMPLOS LOCAL STORAGE
// localStorage.setItem('name', 'Davinia'); // op1
//     localStorage.surname = 'de la Rosa'; // op2


// let firstName = localStorage.getItem('name');
// let lastName  = localStorage.surname;
// console.log(`Hola, mi nombre es ${firstName} ${lastName}`)
// // o también
// console.log(`Hola, mi nombre es ${localStorage.getItem('name')} ${localStorage.surname}`);

// // for(let i=0; i<localStorage.length; i++) {
// //     let key = localStorage.key(i);
// //     alert(`${key}: ${localStorage.getItem(key)}`);
// // }

// //Escribir
// localStorage.setItem('user', JSON.stringify({
//     username: 'Davinia',
//     api_key: 'abc123xyz789'
// }));

// console.log(localStorage.user);
// //Leer
// var user = JSON.parse(localStorage.getItem('user'));

// console.log(localStorage.user);

// var movies = ["Reservoir Dogs", "Pulp Fiction", "Jackie Brown", 
//                 "Kill Bill", "Death Proof", "Inglourious Basterds"];
//     //Escribir
//     localStorage.setItem("quentinTarantino", JSON.stringify(movies));

//     //Leer
//     var retrievedData = localStorage.getItem("quentinTarantino");

//     console.log(typeof(retrievedData));

    //EJEMPLOS WEB OBJECTS 

    // Creamos un objeto
    // const operatingSystem = {
    //     name: 'Ubuntu',
    //     version: 18.04,
    //     license: 'Open Source'
    // };

    // // Obtenemos los conjuntos clave/valor
    // const entries = Object.entries(operatingSystem);

    // console.log(entries);

    // const persona = {
    //     nombre: 'espacio para el nombre',
    //     apellidos: 'espacio para los apellidos',
    //     edad: 'espacio para la edad',
    //     muestraDatos() {
    //         const menor = this.edad < 18 ? 'es menor de edad' : 'no es menor de edad';

    //         alert(`Nombre: ${this.nombre}, Apellidos: ${this.apellidos}.\nTiene ${this.edad} años  y ${menor}`);
    //     }
    // };

    // // Creamos un objeto persona (equivalente a new)
    // var persona1 = Object.create(persona);
    // alert(persona1.muestraDatos());
    // persona1.nombre = "Rafael";
    // persona1["apellidos"] = "Pérez Ramírez";
    // persona1["edad"] = 15;
    // persona1.muestraDatos();

    // // Alternativa con new
    // var persona2 = new Object(persona);
    // persona2["nombre"] = "Ana";
    // persona2.apellidos = "Valcárcel Luis";
    // persona2.edad = 43;
    // console.log(persona2["muestraDatos"]);
    // persona2.muestraDatos();


    const personalInformation = {
        firstName: 'Philip',
        lastName: 'Fry'
    };

    //Objeto 2
    const details = {
        job: 'Delivery Boy',
        employer: 'Planet Express'
    };

    // Objeto resultante de combinar ambos
    var person = Object.assign(personalInformation, details);
    console.log(person);