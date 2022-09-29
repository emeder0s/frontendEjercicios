function setEfectivo(){
    var inputs =  document.getElementsByClassName("form-control-input");
    var efectivo = [];
    for (let i=0;i<inputs.length;i++){
        if(inputs[i].value != 0){
            efectivo[i]=inputs[i].value;
        }else{
            efectivo[i]=0;
        }
    }
    efectivo[efectivo.length-1] = 0;
    return efectivo;
}

function getPrecio(){
    return document.getElementsById("precio").value;
}

function inicializarEfectivo(c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001) {

    return [c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001, 0];
}

function redondear(num){
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

function calcularTotal(efectivo, billetesMonedas) {
    efectivo[efectivo.length - 1] = 0;
    for (let i = 0; i < efectivo.length - 1; i++) {
        //total = total + efectivo[i] * billetesMonedas[i];         // varias formas de hacer lo mismo
        //total += efectivo[i] * billetesMonedas[i];
        efectivo[efectivo.length - 1] += efectivo[i] * billetesMonedas[i];
    }

    //[efectivo.length - 1] esto representa la ultima casilla del array, simplemente la seleccionamos
    efectivo[efectivo.length - 1] = redondear(efectivo[efectivo.length - 1]); //para redondear a dos decimales
    //efectivo.push(total);

    return efectivo;
}

function actualizarCaja(caja, pago) {
    for (let i = 0; i < caja.length; i++) {
        if (pago[i] > 0) {
            caja[i] += pago[i]
        }


    }
    return caja
}

function main(){
    // var caja = inicializarEfectivo(0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 4, 3, 2, 3);
    var caja = setEfectivo();
    alert(caja);
     const billetesMonedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
     caja = calcularTotal(caja, billetesMonedas);
     //document.getElementById("precio-cambio-container").visibility;
     alert(caja);
    // var precio = 17.43;
    // var pago = inicializarEfectivo(0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    // pago = calcularTotal(pago, billetesMonedas);
    // console.log(caja);
    // console.log(billetesMonedas);
    // if (pago[pago.length - 1] - precio == 0) {
    //     alert("Justo! No hay cambio");
    //     caja = actualizarCaja(caja, pago)
    // } else {
    //     var devolver = redondear(pago[pago.length - 1] - precio);
    //     if (devolver > caja[caja.length - 1]) {
    //         alert("Sorry. No tenemos para el cambio");
    //     } else {
    //         var devolucion = inicializarEfectivo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    //         var prueba = 0;
    //         for (let i = 0;i<caja.length; i++) {
    //             for (let j =0;j<=caja[i]; j++) {
    //                 if(devolver>=billetesMonedas[i]){
    //                     devolver -= billetesMonedas[i];
    //                     devolver = redondear(devolver);
    //                     devolucion[i]++;
    //                     caja[i]--;
    //                     calcularTotal(caja,billetesMonedas)
    //                 }
    //             }
    //         }
    //         if(devolver !=0){
    //             alert("Sorry. No tenemos para el cambio");
    //         }else{
    //             var cambio = calcularTotal(devolucion,billetesMonedas)
    //             alert("Toma! Tu cambio: " + cambio[cambio.length-1]);
    //         }
    //     }
    // }
}


