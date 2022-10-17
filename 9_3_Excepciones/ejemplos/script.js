/*function f(){
    console.log('Hola');
    }*/
    // try{
    //     f();
    // }catch{
    //     console.log('Se ha producido una excepción');
    // }finally{
    //     console.log('El finally se ejecuta sí o sí');
    // }

    // try {
    //     throw 'Error creado por Davinia';
    // } catch (e) {
    //     console.log('Se ha producido una excepción: ' + e);
    // } finally {
    //     console.log('El finally se ejecuta sí o sí');
    // }

    // try {
    //     throw { toString: function () { return "Error creado por Davinia desde una función anónima";} };
    // } catch (e) {
    //     console.log('Se ha producido una excepción: ' + e);
    // } finally {
    //     console.log('El finally se ejecuta sí o sí');
    // } 

    try {
        function f() { 
            return "Error creado por Davinia desde una función"; 
        };
        throw { toString: f };
    } catch (e) {
        console.log('Se ha producido una excepción: ' + e);
    } finally {
        console.log('El finally se ejecuta sí o sí');
    }

    try {
        f();
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Se ha producido una excepción: '+ e);
        }
    } finally {
        console.log('El finally se ejecuta sí o sí');
    }