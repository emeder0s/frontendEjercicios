localStorage.razas = [];
localStorage.identificadores = ["uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciseis","diecisiete","dieciocho","diecinueve","veinte"];
localStorage.estadisticas = [];

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
            var razas = new Array();
        }
        
        if(localStorage.estadisticas){
            var estadisticas = JSON.parse(localStorage.estadisticas);
        }else{
            var estadisticas = new Array();
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
        console.log(raza);
        console.log(estadisticas.raza);
        console.log(estadisticas.raza == undefined);
        if (estadisticas.raza == "undefined"){
            console.log(raza);
            estadisticas[raza] = 1;
            console.log(estadisticas[raza]);
        }else{
            estadisticas.raza += 1;
        }
    
        localStorage.razas = JSON.stringify(razas);
        localStorage.estadisticas = JSON.stringify(estadisticas);    
    });
}