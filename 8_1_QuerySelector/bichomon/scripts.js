//1 Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon"
document.querySelector('#gen-1').innerText = "Generasión 1 Pokimon";

//2 Cambia el color de fondo de la primera generación de Pokimon
document.querySelector('.infocard-list').style.background = "#f0f0f0";

//3 Imprime por consola la URL de la página
console.log(window.location.href);

//4 Imprime por consola el dominio de la página
console.log(window.location.hostname);

//5 Imprime todos los nodos de imagen
var images = document.querySelectorAll('div.infocard img');
//console.log(images);

//6 Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
for(let i=0; i<images.length;i++){
    images[i].src="https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

//7 Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
var fondos = document.querySelectorAll('span.infocard-lg-data.text-muted a.itype.flying');
for(let i=0; i<fondos.length;i++){
    fondos[i].style.background = "blue";
}