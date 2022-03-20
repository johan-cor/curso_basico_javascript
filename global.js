
//las variables globales se puede utilizar en el scope local 
//pero la variables del scope local no se pueden utilizar en el scope global

var miNombre = "johann"

function nombre (){
    var miAprellido ="de granda"
    console.log(miNombre+" "+miAprellido);
}

nombre();