
// función que sirve para ocultar y mostrar
function muestraOculta(num) {
    var parrafo = document.getElementById("contenidos_" + num);
    var enlace = document.getElementById("enlace_" + num);
    if (parrafo.style.visibility == "" || parrafo.style.visibility == "visible") {
        parrafo.style.visibility = "hidden";
        enlace.innerText = "Mostrar contenido";
    }
    else {
        parrafo.style.visibility = "visible";
        enlace.innerText = "Ocultar contenido";
    }
}

window.onload = () => {
    var numEnlaces = document.getElementsByTagName("a").length;
    for(let i=1; i <=numEnlaces; i++) {
        document.getElementById("enlace_" + i).setAttribute("onclick", "muestraOculta("+ i +")");
    }
}