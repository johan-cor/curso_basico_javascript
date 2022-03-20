//Declarativas

function mifuncion(){
    return 3;
}

mifuncion(3,4);

//Expresión

var mifuncion = function(a,b){
    return a+b;
}


mifuncion(3,4);


function SaludarStudiante(estudiante){
    console.log("hola como estas: ", estudiante)
}

SaludarStudiante("johann")//utilizando la función


//utilizando temple string otra forma de concatenar valores par imprimir en consola
let estudiante = "johann";
console.log(`hola, como estas ${estudiante}`)