function cargarCargador(num){
    var cargador = [];
    for(i=0;i<num;i++){
        if (i%4==3){
            cargador.push(" ");
        }else{
            cargador.push("pium!");
        }
        
    }
    console.log(cargador);
    return cargador;
}

function chauchat(cargador){
    var pilladaPosicion = Math.floor(Math.random()*10);
    console.log(pilladaPosicion);
    var i = 0;
    var pilladaValidation = pilladaPosicion == i;
    do{
        pilladaValidation = pilladaPosicion == i;
        if(pilladaValidation){
            console.log("Illo, me he quedao pillá!");
        }
        else{
            console.log(cargador[i]);
        }
        i++;
    }while(!pilladaValidation || i>=cargador.lenght);
}

// chauchat(cargarCargador(7));
cargarCargador(7);