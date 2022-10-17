// EJERCICIO 1 - Realiza un programa en JS que permita al usuario insertar una cadena y valide su formato, usando expresiones regulares. Las condiciones de la cadena son:
// - Empieza por un número impar
// - Luego tiene un "(" y un "$"
// - A continuación tiene hasta tres mayúsculas
// - Por último una minúscula
// - La cadena puede estar dentro de otra.

function ejercicio1(){
    const cadena    = 'SDFGFSDG1($ABaDGSDFG';
    const regExp    = new RegExp(/[13579]{1}\(\$[A-Z]{1,3}[a-z]{1}/); 
    const resultado = regExp.test(cadena);
    return resultado;
}

//console.log (ejercicio1());

//EJERCICIO 2 - Modifica el ejercicio anterior para que la cadena empiece y termine exactamente como se indica.
function ejercicio2(){
    const cadena    = '1($ABa';
    const regExp    = new RegExp(/^[13579]{1}\(\$[A-Z]{1,3}[a-z]{1}$/); 
    const resultado = regExp.test(cadena);
    return resultado;
}

//console.log (ejercicio2());

//EJERCICIO 3 - Modifica el ejercicio anterior para que las 4 letras puedan ser mayúsculas o minúsculas.
function ejercicio3(){
    const cadena    = '1($ABaA';
    const regExp    = new RegExp(/^[13579]{1}\(\$[A-Za-z]{4}$/); 
    const resultado = regExp.test(cadena);
    return resultado;
}

//console.log (ejercicio3());

//EJERCICIO 4 - Realiza un formulario en el que el usuario inserte DNI, teléfono y email y valida el formato de los mismos.
// - Formato DNI: 8cifras-1letra
// - Formato teléfono: +34-xxxxxxxxx
// - Formato email: letras@letras.3letras
function checkLeta(dni) {
    var letra = dni.substr(8).toUpperCase();
    var num = dni.substr(0,8);

     if (num < "99999999") {
        var resto = num % 23;
        var letras = "TRWAGMYFPDXBNJZSQVHLCKET"
        var conjunto = letras.charAt(resto);
    }

    return (letra != conjunto) ? false : true;
}

function ejercicio4(){
    var dni = document.getElementById("dni").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    
    var regExpDni = new RegExp(/^[0-9]{8}[A-Z]$/i); 
    var regExpTel = new RegExp(/^\+34-[0-9]{9}$/); 
    var regExpEmail = new RegExp(/^[A-Za-z_.]+@[A-Za-z]+.[A-Za-z]{3}$/i); 

    var checkDni = regExpDni.test(dni);
    if (checkDni) {
        checkLeta(dni)
    }
    var checkTel = regExpTel.test(tel);
    var checkEmail = regExpEmail.test(email);
    
    if (!(checkDni && checkLeta(dni))){
        var mensajeDni = "El dni es incorrecto. Revisa los datos";
        var paragraph1 = document.createElement("p");
        var content1 = document.createTextNode(mensajeDni);
        paragraph1.appendChild(content1);
        document.getElementById("mensajeDNI").appendChild(paragraph1);
    } 

    if (!checkTel) {
        var mensajeTel = "El teléfono es incorrecto. Revisa los datos";
        var paragraph2 = document.createElement("p");
        var content2 = document.createTextNode(mensajeTel);
        paragraph2.appendChild(content2);
        document.getElementById("mensajeTel").appendChild(paragraph2);
    }

    if(!checkEmail){
        var mensajeEmail = "El email es incorrecto. Revisa los datos";
        var paragraph3 = document.createElement("p");
        var content3 = document.createTextNode(mensajeEmail);
        paragraph3.appendChild(content3);
        document.getElementById("mensajeEmail").appendChild(paragraph3);
    }

    if(!(checkDni && checkLeta(dni)) && checkTel && checkEmail){
        alert("Datos registrados con éxtio");
    }
}


    
