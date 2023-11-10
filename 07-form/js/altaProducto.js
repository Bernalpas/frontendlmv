
console.log('===============================================');
console.log('======== Bienvenido al Alta del Priducto ======');
console.log('===============================================');

//obtenemos los datos del Producto con la función 
//ES5
/* function altaProductos() {
    
} */

//Variables
let nombreProducto, precioProducto, stockProducto, imagenProducto, productoForm;
//index               0    1   2   3
let listaProductos = [];

//listaProductos[0]

//objetos
/* let persona ={
    nombre: 'Pepe'
} */


//Arrow function - ES6

const dameDatos = () => {
    nombreProducto = document.getElementById('nombreProducto').value;
    precioProducto = document.getElementById('precioProducto').value;
    stockProducto = document.getElementById('stockProducto').value;
    imagenProducto = document.getElementById('imagenProducto').value
    productoForm = document.getElementById('productoForm');
}

//CRUD
//Create: Insertar datos
//Read: Leer datos
//Update: Actualizar datos
//Delete: Eliminar datos

const altaProductos = () => {

    dameDatos();

    let producto = {
        nombreProducto,
        precioProducto,
        stockProducto,
        imagenProducto
    }
    
    console.log(producto);
    
    console.log('===============================================');
    
    
    listaProductos.push(producto);
    
    console.log(listaProductos);
    
    console.log('===============================================');

    console.log(`El producto dado de alta es ${nombreProducto} y su precio es ${precioProducto} y su stock es de ${stockProducto} cajas y su imagen está en ${imagenProducto}`);

    productoForm.reset();

}


function eliminarProducto() {

    listaProductos.pop();

    console.log(listaProductos);
    
}



