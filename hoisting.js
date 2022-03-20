//esto genera un hoisting
console.log(miNombre);

var miNombre ="johann";


//esto no genera un hoisting porque es una funcion declarada


hey();

function hey(){
    console.log("esta es la funcion que no genera hoisting");
}