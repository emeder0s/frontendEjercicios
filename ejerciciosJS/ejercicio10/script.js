// Devuelve True si es primo y False si no. 
function es_primo(num){
    var i=2;
    while(num%i != 0){
        i++;
    }
    return i==num;
}

// alert(es_primo(4));
// alert(es_primo(7));
// if(es_primo(7)){
//     alert("El siete es primo!!!!");
// }

function primos_rango(max){
    var resultado = [];
    for(let i=2; i<=max; i++){
        if (es_primo(i)){
            resultado.push(i);
        }
    }
    return resultado;
}

// alert(primos_rango(14));

function es_simplicable(num,den){ 
    return !((num!=den && es_primo(num) && es_primo(den)) || (num==1 || den==1));
}

// alert(es_simplicable(13,29)); //false
// alert(es_simplicable(17,20)); //false
// alert(es_simplicable(15,37)); //false
// alert(es_simplicable(1000,10)); //true
// alert(es_simplicable(5,5)); //true

function simplicar(num,den){
    if(es_simplicable(num,den)){
        var rango = [];
        if(num<den){
            rango = primos_rango(num);
        }else{
            rango = primos_rango(den);
        }
        
        for(let i=rango.length-1;i>=0;i--){
            while(num%rango[i] == 0 && den%rango[i] == 0){
                num = Math.floor(num/rango[i]);
                den = Math.floor(den/rango[i]);
            }
        }
    }
    return [num,den];
}

//alert(simplicar(8,4));
// alert(simplicar(4,2));

function leer_fraccion(){
    var num = window.prompt("Introduce el numerador: ");
    var den = window.prompt("Introduce el denominador: ");
    return simplicar(num,den);
}

function escribir_fraccion(num,den){
    if (den == 1){
        alert(num);
    }else{
        alert("La fraccion es: "+num+"/"+den);
    } 
}


var fraccion = leer_fraccion();
var num = fraccion[0];
var den = fraccion[1];
escribir_fraccion(num,den);