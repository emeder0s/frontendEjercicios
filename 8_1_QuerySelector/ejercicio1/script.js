// Modifica el primer ejercicio DOM, usando QuerySelector

var links = document.querySelectorAll("a");
var paragraphs = document.querySelectorAll("p");

// Número de enlaces de la página
var num_links = links.length;
console.log("Número de enlaces: "+ links.length);

//Dirección a la que enlaza el penúltimo enlace
var dir_last_link = links[links.length-2].href;
console.log("Dirección a la que enlaza el penúltimo enlace: " +  dir_last_link);

//Numero de enlaces que enlazan a http://prueba
var number_of_links_to = 0;
for(let i=0; i<links.length; i++){
    if (links[i].href == "http://prueba/"){
        number_of_links_to++;
    }
}
console.log("Numero de enlaces que enlazan a http://prueba/: "+ number_of_links_to);

//Número de enlaces del tercer párrafo
var third_paragraph = paragraphs[2];
var number_of_links_in_third_paragraph= third_paragraph.getElementsByTagName("a").length;
console.log("Número de enlaces del tercer párrafo: " + number_of_links_in_third_paragraph);