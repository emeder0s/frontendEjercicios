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

function leer_fraccion(num){
    if (num==1){
        fraccion = "primera";
    }else{
        fraccion = "segunda"
    }
    var num = parseInt(window.prompt("Introduce el numerador de la "+fraccion+" fracción: "));
    var den = parseInt(window.prompt("Introduce el denominador de la "+fraccion+" fracción: "));
    // return simplicar(num,den);
    return [num,den];
}

function escribir_fraccion(num,den){
    if (den == 1){
        alert(num);
    }else{
        alert("La fraccion es: "+num+"/"+den);
    } 
}

function sumar_facciones(num1,num2,den1,den2){
    // console.log();
    var num = num1+num2;
    var den = den1+den2;

    return [num,den];
}

function restar_facciones(num1,num2,den1,den2){
    var num = (num1*den2)-(num2*den1);
    var den = den1*den2;

    return [num,den];
}

function multiplicar_facciones(num1,num2,den1,den2){
    var num = num1*num2;
    var den = den1*den2;

    return [num,den];
} 

function dividir_facciones(num1,num2,den1,den2){
    var num = num1*den2;
    var den = den1*num2;

    return [num,den];
} 

function main(operacion){
    if (operacion != 5){
        var num, den,fraccion;
        var fraccion1 = leer_fraccion(1);
        var num1 = fraccion1[0];
        var den1 = fraccion1[1];
        
        var fraccion2 = leer_fraccion(2);
        var num2 = fraccion2[0];
        var den2 = fraccion2[1];
        console.log(num1);
        console.log(den1);
        console.log(num2);
        console.log(den1);
        switch(operacion){
            case 1:
                fraccion = sumar_facciones(num1,num2,den1,den2);
                break;
            case 2:
                fraccion = restar_facciones(num1,num2,den1,den2);
                break;
            case 3:
                fraccion = multiplicar_facciones(num1,num2,den1,den2);
                break;
            case 4:
                fraccion = dividir_facciones(num1,num2,den1,den2);
                break;
        }
        
         fraccionSimplificada = simplicar(fraccion[0],fraccion[1]);
         escribir_fraccion(fraccionSimplificada[0],fraccionSimplificada[1]);
    }
}