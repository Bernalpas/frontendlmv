
console.log('=========================================================');

console.log(`5. soy el JS con el template string`);

console.log('3. Soy el JS de la página externa');

console.log("4. Soy un JS con comillas dobles"); 

console.log('=========================================================');

/* 
Comentarios de varias
líeas para 
JavaScript
*/

// comentario de una sóla línea

//1. Variables   / palabras reservadas: son comandos exclusivos de javascript

//Declaración de una variable
var nombre;

let email

const DNI = 123456789;

console.log(DNI);

//Asignación del valor de la variable
nombre = 'Pepe'

email = "pepe@gmail.com";

console.log(nombre);

//Dos cosas a la vez
var edad = 20

nombre = 'Mario';

console.log(nombre);

//DNI = 879845434

console.log(DNI);

nombre = 150

console.log(nombre);

console.log('=========================================================');

//Arreglos - arrays
//indice:         0       1        2        3      4      5        6
let alumnos = ['Pepe', 'Mario', 'Juan', 'María', 'Ana', 'Luis', 'Pablo'];

console.log(alumnos);

console.log('El alumno en la posición 4 con el índice 3 es: ' + alumnos[3]);

console.log('=========================================================');

console.log(alumnos[0]);
console.log(alumnos[1]);
console.log(alumnos[2]);
console.log(alumnos[3]);
console.log(alumnos[4]);
console.log(alumnos[5]);
console.log(alumnos[6]);

alumnos.push('Bernando');

console.log(alumnos);

console.log('=========================================================');

//Variables booleanas
let verdadero = true;
let falso = false;

let compra = false;

console.log(compra, verdadero, falso);

console.log('=========================================================');

//Variables tipo objetos
let persona = { nombre: 'Pepe', apellidos: 'Pérez', edad: 15, provincia: 'Misiones', pais: 'Argentina'}

console.log(persona.nombre, persona.provincia);

persona.cpostal = 5500;
persona.pasaporte = true;

console.log(persona);

console.log('=========================================================');

//Condicionales - se ejecutan cuando se cumple una condición
if(persona.edad > 18){
    console.log('Es mayor de edad, puedes comprar bebidas alcohólicas');
}else{
    console.log('No puedes comprar bebidas alcohólicas, tenés ' + persona.edad + ' años');
}

console.log('=========================================================');

if(persona.pasaporte){
    console.log(`Puede viajar al exterior, ya que tu pasaporte es: ${persona.pasaporte}`);
}else{
    console.log(`No puede viajar al exterior, ya que tu pasaporte es: ${persona.pasaporte}`);
}

console.log('=========================================================');

//Operadores matemáticos: + - * / 
let uno = 1500
let dos = 6890

let resultado = uno + dos;

console.log(`El resultado de la suma de ${uno} + ${dos} es: ${resultado}`);

resultado = dos - uno;

console.log(`El resultado de la resta de ${dos} - ${uno} es: ${resultado}`);

resultado = uno * dos;

console.log(`El resultado de la multiplicación de ${uno} * ${dos} es: ${resultado}`);

resultado = dos / uno;

console.log(`El resultado de la división de ${dos} / ${uno} es: ${resultado}`);


console.log('=========================================================');

//Operadores lógicos: && (y) || (o) ! (no)
let user = 'admin';
let password = 'kjahjkhfgjhsjfdhg';
let face = false;

//     true                   true             true
if(user == 'admin' && password == '123456' && face){
    console.log('Acceso correcto, bienvenido a tu perfil de Instagram');
}else{
    console.log('Acceso incorrecto, usuario o contraseña incorrectos');
}


console.log('=========================================================');

//      true                  false            false
if(user == 'admin' || password == '123456' || face){
    console.log('Acceso correcto, bienvenido a tu perfil de Instagram');
}else{
    console.log('Acceso incorrecto, usuario o contraseña incorrectos');
}


console.log('=========================================================');

let pasajes = false;

console.log(!pasajes);

let dato = 'hola';


if(!dato){
    console.log('No hay datos');
}else{
    console.log('Hay datos');
}


console.log('=========================================================');





