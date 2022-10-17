//1. Crea un array de dos dimensiones (matriz) que contenga números y cadenas 
//   solicitados al usuario, muestra por pantalla los elementos cadena que se 
//   encuentren en posiciones fila par y columna impar

function rellenarMatriz(elementos){
    //console.log(elementos);
    var matriz = []; 
    var fila;
    var index = 0;

    for (let i=0; i<3; i++){
        fila = [];
        for (let j=0; j<3; j++){
            fila[j] = elementos[index].value;
            index ++; 
        }
        matriz.push(fila);
    }

    // for (let i=0; i<3; i++){
    //     for (let j=0; j<3; j++){
    //         matriz[i][j] = elementos[index].value;
    //         index ++; 
    //     }
    // }
   
    return matriz;
}

function ejercicio1(){
    var elementos = document.getElementsByClassName("eje1");
    //var matriz = [[elementos[0].value, elementos[1].value, elementos[2].value],[elementos[3].value, elementos[4].value, elementos[5].value],[elementos[6].value, elementos[7].value, elementos[8].value]];
    var matriz = rellenarMatriz(elementos);
   // console.log(matriz)

    // for (let i =0; i<3; i++){
    //     for (let j =0; j<3; j++){
    //         if(i%2==0 && j%2!=0){
    //             console.log(matriz[i][j]);
    //         }
    //     }
    // }
}

//2. Crea un array a partir de las siguientes instrucciones:
// El tamaño es solicitado al usuario
// Elemento1: 1
// Elemento2: 1
// ElementoN: ElementoN-1 + ElementoN-2

function ejercicio2(){
    var longitud = parseInt(document.getElementById("longitudArray").value);
    var array = [1,1];
    for (let i = 0; i < longitud; i++) {
                
    }
}


//3. Solicita al usuario un array de máximo 10 números reales y calcula su media.