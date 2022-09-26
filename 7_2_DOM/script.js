
/*
 * Completar la función muestra de JavaScript para que realice lo siguiente:
 *  Ocultar el enlace Seguir leyendo.
 *  Mostrar el texto incluido dentro del span 
 */
function muestra(){
    var enlace1 = document.getElementById("enlace1");
    enlace1.setAttribute("class","oculto");
    enlace2.setAttribute("class","visible");

    var adicionalText = document.getElementById("adicional").innerText;
    var paragraph = document.createElement("p");
    var text = document.createTextNode(adicionalText);
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
    console.log(document.getElementsByTagName("p").length);
}

/*
 *  Crear un nuevo evento en el enlace2 que llamará a la función oculta().
 *  Dicha función ocultará el enlace2, el texto el span y volverá a mostrar el enlace Seguir leyendo.
 */
function oculta(){
    console.log(document.getElementsByTagName("p").length);
    enlace2.setAttribute("class","oculto");
    enlace1.setAttribute("class","visible");
    var paragraphs = document.getElementsByTagName("p");
    var paragraph = paragraphs[(paragraphs.length-1)];
    document.body.removeChild(paragraph);




}