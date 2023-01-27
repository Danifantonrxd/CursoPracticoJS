var articulos = [
    {nombre: "Bicicleta", precio: 200},
    {nombre: "Tundra", precio: 20000},
    {nombre: "Controlador", precio: 1500},
    {nombre: "Whisky", precio: 20},
    {nombre: "Curso", precio: 100},
    {nombre: "Moto", precio: 1000},
    {nombre: "Camioneta", precio: 5000},
    {nombre: "Pantalon", precio: 50},
    {nombre: "Laptop", precio: 350},
    {nombre: "Lentes", precio: 75},
];

var articulosFiltrados = articulos.filter(function(x){
    return x.precio <= 200;
});

var nombreArticulos = articulos.map(function(a){
    return a.nombre;
});

//A diferencia de .filter, el .find se quedara con la primera 
//ocurrencia que encuentre y no seguira buscando

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Tundra";
});

articulos.forEach(function(b){
    console.log(b.nombre);
});

var articulosBaratos = articulos.some(function(x){
    return x.precio <= 100;
});