var frutas = ["pera","manzana","mango","uva","banano","fresa","cereza"];


//para agregar un elemento al arreglo
var masFrutas = frutas.push("uvas");
console.log(frutas);

//para quitar el ultimo elemento del arreglo
var ultimo = frutas.pop("uvas");
console.log(frutas);

//para agregar un elemento al inicio del arreglo
var nuevalongitud =frutas.unshift("naranja");
console.log(frutas);

//para eliminar el elemento que esta al inicio del arreglo
var borrarfruta =frutas.shift("naranja");
console.log(frutas);

// para saber la posicion de un elemento
var posicion = frutas.indexOf("banano");
console.log(posicion);
//////////////////////////////////////////////////////////////////////////


var studiantes = ["maria","Sergio","Rosa","Daniel"];

function saludarEstudiante(estudiante){
    console.log(`hola ${estudiante}`);
}


for(var i=0; i < studiantes.length; i++ ){
    saludarEstudiante(studiantes[i]);
}

for (var estudiante1 of studiantes){

        saludarEstudiante(estudiante1);

}



/////////////////////////////////////////////////////////////////////////////


var studiantesnew = ["maria","johann","Rosa","daniel"]

function saludarStudiantesNew(estudiante){
    console.log(`hola ${estudiante}`);
}

while(studiantesnew.length>0){
    console.log(studiantesnew);
    var estudiantenew= studiantesnew.shift();
    saludarStudiantesNew(estudiantenew);
}


/////////////////////////////////////////////

var miAuto= {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalledelauto: function(){
        console.log(`auto ${this.modelo} ${this.annio}`);
    }
}

miAuto.detalledelauto();


/////////////////////////////////////////////////////////////

function auto(marca,model,annio){
    this.marca =marca;
    this.model =model;
    this.annio = annio;

}

var autonuevo = new auto("Tesla","model 3", 2020);
var autonuevo2 = new auto("tesla","modelo x",2018);
var autonuevo2 = new auto("Toyota","Crola",2020);

console.log(autonuevo);



/////////////////////////////////////////////////////////////////
//filtradon arrays con el metodo filter

var articulos = [
    {nombre:"costo", costo:3000},
    {nombre:"tv", costo:2500},
    {nombre:"libro", costo:320},
    {nombre:"celular", costo:10000},
    {nombre:"laptop", costo:20000},
    {nombre:"teclado", costo:500},
    {nombre:"audifonos", costo:1700}

]


var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;

});

console.log(articulosFiltrados);

// filtrando arrays con el metodo map


var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

////////////////////////////////////////
//metodo find

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre ==="laptop";
});

console.log(encuentraArticulo);


// utilizando el forEach ()

articulos.forEach(function(articulo){
    console.log(articulo.nombre);

});

// uso del metodo some()

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
});

console.log(articulosBaratos);