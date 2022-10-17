fetch('https://dog.ceo/api/breeds/list/all')
.then(res=>res.json())
.then(json=>{
    var razas = Object.keys(json.message);
    razas.map(raza => {
        var button = document.createElement("button");
        button.setAttribute("class","button-raza");
        button.setAttribute("onclick","getBreed(this)");
        var content = document.createTextNode(raza);
        button.appendChild(content);
        document.getElementById("buttons").appendChild(button);
    });
});

function getBreed(boton){
    var raza = boton.textContent;
    fetch(`https://dog.ceo/api/breed/${raza}/images/random`)
    .then(res=>res.json())
    .then(json=>{
     var randomImgUrl = json.message;
     var img = document.getElementById("imageRandom");
     img.style.backgroundImage=`url(${randomImgUrl})`;
     img.style.backgroundSize="contain";
     img.style.backgroundRepeat="no-repeat";
     img.style.backgroundPosition="center";
    });
}

// fetch(`https://dog.ceo/api/breed/${prompt("Elige una raza")}/images`)
// .then(res=>res.json())
// .then(json=>{
//     console.log(json.message);
// });


