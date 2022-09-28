// función que sirve para ocultar y mostrar
function muestraOculta(enlace) {
    parrafoId = "contenidos_" + enlace.id.substr(-1);
    var parrafo = document.getElementById(parrafoId);
    if (parrafo.style.visibility == "" || parrafo.style.visibility == "visible") {
        parrafo.style.visibility = "hidden";
        enlace.innerText = "Mostrar contenido";
    }
    else {
        parrafo.style.visibility = "visible";
        enlace.innerText = "Ocultar contenido";
    }
}

// window.onload = () => {
//     var numEnlaces = document.getElementsByTagName("a").length;
//     for(let i=1; i <=numEnlaces; i++) {
//         document.getElementById("enlace_" + i).setAttribute("onclick", "muestraOculta("+ i +")");
//     }
// }

//Mismo ejercicio pero con el THIS
window.onload = () => {
    var numEnlaces = document.getElementsByTagName("a").length;
    for(let i=1; i <=numEnlaces; i++) {
        document.getElementById("enlace_" + i).setAttribute("onclick", "muestraOculta(this)");
    }
}