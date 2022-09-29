class Piramide {

    constructor(dimension1, dimension2) {
        this.dim1 = dimension1;
        this.dim2 = dimension2;
    }

    get dimension1(){
        return this.dim1;
    }

    set dimension1(dim){
        this.dim1 = dim;
    }

    get dimension2(){
        return this.dim2;
    }

    set dimension2(dim){
        this.dim2 = dim;
    }

    pintaEspacio(NumEspacios){
        var espacios = "";
        for(let i=0;i<NumEspacios;i++){
            espacios += " ";
        }
        return espacios;
    }

    pintar(){
        var dimension = this.dim1;
        var piramide = "";
        var linea ="";
        var espacios = 0;

        while(dimension <= this.dim2){
            var numEspacios = (this.dim2-dimension)/2;
            espacios = this.pintaEspacio(numEspacios);
            linea = "";

            for(let i=0;i<dimension;i++){
                linea += "+"
            }
            linea = espacios + linea + espacios;
            piramide += linea+"\n"
            dimension+=2;
        }

        dimension=this.dim2-2;
        while(dimension >= this.dim1){
            var numEspacios = (this.dim2-dimension)/2;
            espacios = this.pintaEspacio(numEspacios);
            linea = "";

            for(let i=0;i<dimension;i++){
                linea += "+"
            }
            linea = espacios + linea + espacios;
            piramide += linea+"\n"
            dimension-=2;
        }
        return piramide;
    }


};

let piramide = new Piramide(4,10);
console.log(piramide.pintar());