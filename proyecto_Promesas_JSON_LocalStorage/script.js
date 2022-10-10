localStorage.razas = [];
localStorage.identificadores = ["uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciseis","diecisiete","dieciocho","diecinueve","veinte"];


function getDivId(){
    var id = "";
    var ids = localStorage.identificadores.split(",")
    if(localStorage.identificadores){
        id = ids[0];
    }
    localStorage.identificadores = ids.splice(1);
    return id;
}

function putDog(id,urlImg){
    console.log(urlImg);
    console.log(id);
    document.getElementById(id).style.backgroundImage=`url(${urlImg})`;
    document.getElementById(id).style.backgroundSize="contain";
    document.getElementById(id).style.backgroundRepeat="no-repeat";
    document.getElementById(id).style.backgroundPosition="center";   
}

function searchDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(json => {
        var divId = "";
        putDog("randomDog",json.message);
        if(localStorage.razas){
            var razas = JSON.parse(localStorage.razas);
        }else{
            var razas = [];
        }

        var raza = json.message.split("/")[4];
        if(!razas.includes(raza)){
            razas.push(raza);
            divId = getDivId();
            if (divId){
                putDog(divId,json.message); 
            }
            
        }else{
            console.log("Esta raza ya está en la colección!");
        }

        localStorage.razas = JSON.stringify(razas);

    });
}