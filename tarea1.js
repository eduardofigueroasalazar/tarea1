function mostrarParImpar(numeroEntero){
    var mensajeFuncion = '';
    if (numeroEntero % 2 == 0){
        mensajeFuncion = 'El número '+numeroEntero+' es par.';
    }else{
        mensajeFuncion = 'El número '+numeroEntero+' es impar.';
    }

    return mensajeFuncion;
}

function mostrarPosicionLetra(letraPosicion){
    var cadenaCompleta  = 'abcdefghijklmnñopqrstuvwxyz';
    var mensajeFuncion  = '';
    var posicionLetra   = cadenaCompleta.indexOf(letraPosicion);
    if (letraPosicion.length==0){
        mensajeFuncion = 'No se ingreso letra.';
    }else{
        if (posicionLetra >= 0 && posicionLetra <= 27){
            posicionLetra++;
            mensajeFuncion      = 'Letra se encuentra en la posiccion '+posicionLetra+'.';
        } else{
            mensajeFuncion      = 'Letra no se encuentra en la cadena.';
        }
    }
    
    return mensajeFuncion;
}

function precioImpuesto(precio){
    var mensajeFuncion  = '';
    if (precio==0){
        mensajeFuncion = 'Debe ingresar el precio.';
    }else if (precio < 0){
        mensajeFuncion = 'Debe ingresar un precio positivo.';
    }else if (precio>0){
        precio = Math.round(precio*1.19);
        mensajeFuncion = 'Precio con impuesto es $ '+new Intl.NumberFormat("de-DE").format(precio)+'.'
    }else{
        mensajeFuncion = 'Debe ingresar precio.'
    }
    return mensajeFuncion;
}

function nuevoDado(nombre){
    return function (){
    dadoResultado = parseInt((Math.random()*6) +1)
    console.log(nombre + ' tiró un dado y salió '+dadoResultado)
    }
}

function Persona(nombreCompleto, edad){
    this.nombreCompleto = nombreCompleto;
    this.edad           = edad;
}

Persona.prototype.guardarEnLocalStorage = function(){
    localStorage.setItem('nombreCompleto', this.nombreCompleto)
    localStorage.setItem('edad', this.edad)
}

Persona.prototype.guardarEnSessionStorage = function(){
    sessionStorage.setItem('nombreCompleto', this.nombreCompleto)
    sessionStorage.setItem('edad', this.edad)
}