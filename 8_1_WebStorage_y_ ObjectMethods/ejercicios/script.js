//EJERCICIO 1

class Usuario{
    constructor(nombre, email, mensaje){
        this.nombre = nombre;
        this.email = email;
        this.mensaje = mensaje;
    }
}

class Contactos{
    constructor(){
        this.contactos = [];
    }

    addContacto(user){
        this.contactos.push(user);
    }

}

var contactos = new Contactos();

function MostrarDatos(user){

    //nombre
    var columnName = document.createElement("p"); 
    var contentName = document.createTextNode (user.nombre); 
    columnName.appendChild (contentName);

    //email
    var columnEmail = document.createElement("p"); 
    var contentEmail = document.createTextNode (user.email); 
    columnEmail.appendChild (contentEmail);

    //email
    var columnMensaje = document.createElement("p"); 
    var contentMensaje = document.createTextNode (user.mensaje); 
    columnMensaje.appendChild (contentMensaje); 
    
    document.querySelector("#mostrarDatos").appendChild(columnName);
    document.querySelector("#mostrarDatos").appendChild(columnEmail);
    document.querySelector("#mostrarDatos").appendChild(columnMensaje);
}

function getDatos(){
    var name = document.querySelector("#nombre").value;
    var mail =document.querySelector("#email").value;
    var message = document.querySelector("#mensaje").value;
    var user = new Usuario(name,mail,message);
    contactos.addContacto(user);

    localStorage.contactos = JSON.stringify(contactos);
    MostrarDatos(user);
}

// EJERCICIO 2
function borrarDatos(){
    localStorage.clear();
}

function borrarContacto(){
    var email = document.querySelector("#borrarEmail").value;
    var usuarios = JSON.parse(localStorage.contactos).contactos;
    usuarios.forEach((usuario,index) => {
        if(usuario.email == email){
            usuarios.splice(index,1);
        }
    });
    localStorage.contactos = JSON.stringify(usuarios);
}

