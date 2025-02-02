//Hola mundo!
console.log("Hola Mundo desde JavaScript");

/*
Ejemplos de 
tipos de datos 
en JavaScript
*/
//Tipo de dato string
var nombre = "Carlos";
console.log(typeof nombre);

nombre = 10.5;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);


//Tipo de dato object
var objecto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}
console.log(typeof objecto);


//Tipo de dato boolean (true, false)
var bandera = false;
console.log(typeof bandera);


//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);


//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//-------------------------------------------------------------------------------------------//

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//-------------------------------------------------------------------------------------------//

//Tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);


//null = ausencia de valor
var y = null;
console.log(typeof y);

//-------------------------------------------------------------------------------------------//

//arreglo en JavaScript
var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);


//Cadena vacia (empty string)
var z = '';
console.log(z);
console.log(typeof z);

var nombre = 'Juan';
var apellido = 'Perez';

//-------------------------------------------------------------------------------------------//

//Concatenacion 
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

var x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);

//-------------------------------------------------------------------------------------------//

//Para declarar una variable con buenas practicas, let o const
let nombre;
nombre = "Juan";
console.log( nombre );

const apellido = "Perez";
//apellido = "Lara"; Error no se puede cambiar el valor de una constante

//-------------------------------------------------------------------------------------------//

//Buenas Practicas
let nombreCompleto = "Juan Perez";
console.log( nombreCompleto );

let x, y;
x = 10, y = 20;
let z = x + y;
console.log(z);

//-------------------------------------------------------------------------------------------//

//Reglas para definir nombres en JavaScript
let nombreCompleto = "Juan Perez";
let nombrecompleto = "Carlos Lara";
console.log( nombreCompleto );
console.log( nombrecompleto );

let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
//let 1nombreCompleto; no está permitido iniciar el nombre de una variable con numeros

let ruptura = 10;

//-------------------------------------------------------------------------------------------//

//Operadores
let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z );

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log( "Resultado de la mult:" + z);

z = a / b;
console.log( "Resultado de la division:" + z);

z = a % b;//residuo de la division
console.log( "Resultado de operacion modulo (residuo):" + z);

z = a ** b;
console.log( "Resultado de operador exponente:" + z);


//-------------------------------------------------------------------------------------------//

//Operadores de incremento y decremento
let a = 3, b = 2;
let z = a + b;

//Incremento
//Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Predecremento
z = --a;
console.log(a);
console.log(z);

//Postdecremento
z = b--;
console.log(b);
console.log(z);

//-------------------------------------------------------------------------------------------//

//Procedencia de operadores
let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log( z ); 

z = (c + a) * b / c;
console.log(z);

//-------------------------------------------------------------------------------------------//

//Operador de asignacion
let a = 1;

a += 3; // a = a + 3
console.log(a);

a -= 2; // a = a - 2
console.log(a);

/*
*=
/=
%=
**=
*/

//-------------------------------------------------------------------------------------------//

//Operadores de comparacion
let a = 3, b = 2, c = "3";

let z = a == c; // se revisa el valor sin importar el tipo
console.log(z);

z = a === c;// revisa los valores pero tambien los tipos
console.log(z);

//-------------------------------------------------------------------------------------------//

//Operadores distinto A

let a = 3, b = 2, c = 3;

let z = a != c; // se revisa el valor sin importar el tipo
console.log(z);

z = a !== c;// revisa los valores pero tambien los tipos
console.log(z);

//-------------------------------------------------------------------------------------------//

//Operadores relacionales
let a = 3, b = 2, c = "3";

let z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);

//-------------------------------------------------------------------------------------------//

//Ejercicio numero par
let a = 9;

if( a % 2 == 0){
    console.log("Es un número par");
}
else{
    console.log("Es un número impar");
}


// Ejercicio con condicional  
let edad = 18, adulto = 18;

if( edad >= adulto ){
    console.log( "Es un adulto" );
}
else{
    console.log( "Es menor de edad" );
}


//-------------------------------------------------------------------------------------------//

//Operador logico AND

let a = 15;
let valMin = 0, valMax = 10;

if( a >= valMin && a <= valMax ){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango");
}

//-------------------------------------------------------------------------------------------//

//Operador logico OR


//Ejemplo AND (&&), regresa true solo si ambos operandos son true
let a = 15;
let valMin = 0, valMax = 10;

if( a >= valMin && a <= valMax ){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango");
}

//Ejemplo OR (||), regresa true si cualquier operando es true
let vacaciones = false, diaDescanso = true;
if( vacaciones || diaDescanso ){
    console.log("Padre puede asistir al juego del hijo");
}
else{
    console.log("El padre está ocupado");
}

//-------------------------------------------------------------------------------------------//

//Operador ternario

let resultado = (1>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 110;
resultado = ( numero % 2 == 0 ) ? "Número par" : "Número impar"; 
console.log( resultado );

//-------------------------------------------------------------------------------------------//

//Conversion String a Numero

let miNumero = "18";
 //console.log(typeof miNumero);
 
 let edad = Number(miNumero);
 //console.log(typeof edad);
 if(edad >= 18){
	 console.log("Puede votar");
 }
 else{
	 console.log("Muy joven para votar");
 }
 
 let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
 console.log( resultado );

 //-------------------------------------------------------------------------------------------//

 //Funcion isNaN (is Not a Number)

 let miNumero = "17"; //let miNumero = "17x"; 
 //Si incluimos un caracter o algo que deje de ser un numero, isNaN, nos informa que no es un numero.

let edad = Number(miNumero); 
console.log( edad );

if( isNaN(edad)){
    console.log("No es un número");
}
else{
    if(edad >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }    
}

if( isNaN(edad)){
    console.log("No es un número");
}
else{
    let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
    console.log( resultado ); 
}

//-------------------------------------------------------------------------------------------//

//Ejercicio de procedencia de operadores

let x = 5;
let y = 10;
let z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);

let resultado = 4 + 5 * 6 / 3;// (4 + ((5*6)/3))
console.log(resultado);

resultado = (4 + 5) * 6 / 3;
console.log(resultado);

//-------------------------------------------------------------------------------------------//

//Condicional 

let condicion = false;

if(condicion){
    console.log("Condición verdadera");
    console.log("fin del programa");
}
else{
    console.log("Condición falsa");
}

//-------------------------------------------------------------------------------------------//

//Ejercicio ConversionNumeroTexto

let numero = 2;

if( numero == 1 ){
    console.log("Número uno");
}
else if( numero == 2 ){
    console.log("Número dos");
}
else if( numero == 3 ){
    console.log("Número tres");
}
else if( numero == 4 ){
    console.log("Número cuatro");
}
else{
    console.log("Número desconocido");
}

//-------------------------------------------------------------------------------------------//

//Calculo estacion del añ0

let mes = 12;
let estacion;

if( mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
}
else if( mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}
else if( mes == 6 || mes == 7 || mes == 8 ){
    estacion = "Verano";
}
else if( mes == 9 || mes == 10 || mes == 11 ){
    estacion = "Otoño";
}
else{
    estacion = "Valor incorrecto";
}

console.log(estacion);

//-------------------------------------------------------------------------------------------//

//Hora del dia

/*
6am-11am - Buenos dias
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas noches
0am-6am - Durmiendo
*/

let horaDia = 23;
let mensaje;

if( horaDia >= 6 && horaDia <= 11 ){
    mensaje = "Buenos días";
}
else if( horaDia >= 12 && horaDia <= 18 ){
    mensaje = "Buenas tardes";
}
else if( horaDia >= 19 && horaDia <= 24){
    mensaje = "Buenas noches";
}
else if( horaDia >= 0 && horaDia < 6){
    mensaje = "Durmiendo";
}
else{
    mensaje = "Valor incorrecto";
}

console.log(mensaje);

//-------------------------------------------------------------------------------------------//

//Estructura switch

let numero = 1;

let numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1: 
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';                
}

console.log(numeroTexto);

//-------------------------------------------------------------------------------------------//

//Ejercicio mes del año

let mes = 11;
let estacion = 'Estación desconocida';

switch( mes ){
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor incorrecto';                
}
console.log(estacion);

//-------------------------------------------------------------------------------------------//

//Ciclo while

let contador = 0;

while( contador < 3 ){
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");

//-------------------------------------------------------------------------------------------//

//Do while

let contador = 0;
/*
while( contador < 3 ){
    console.log(contador);
    contador++;
}
*/

do{
    console.log(contador);
    contador++;
}while(contador < 3);
console.log("Fin ciclo do while");

//-------------------------------------------------------------------------------------------//

//Ciclo For

/*
let contador = 0;
while( contador < 3 ){
    console.log(contador);
    contador++;
}

do{
    console.log(contador);
    contador++;
}while(contador < 3);
*/

for(let contador = 0; contador < 3 ; contador++ ){
    console.log(contador);
}
console.log("Fin ciclo for");

//-------------------------------------------------------------------------------------------//

//Break

for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
		 console.log(contador);
        break;//termina la ejecución del ciclo for por completo 
    }
   
}

//-------------------------------------------------------------------------------------------//

//Continue

for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue;//ir a la siguiente iteracion
    }
    console.log(contador);
}

//-------------------------------------------------------------------------------------------//

//Label

inicio:
for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue inicio;//ir a la siguiente iteracion
    }
    console.log(contador);
}

//-------------------------------------------------------------------------------------------//

//Arreglos
//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

//-------------------------------------------------------------------------------------------//

//Recorrer arreglos

//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

//-------------------------------------------------------------------------------------------//


//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

autos[1] = 'MerecedesBenz';
console.log(autos[1]);

autos.push('Audi'); //Agrega un elemento al final del array
console.log(autos);

//-------------------------------------------------------------------------------------------//

//Agregar elementos al arreglo

//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

autos[1] = 'MerecedesBenz';
console.log(autos[1]);

autos.push('Audi');
console.log(autos);

console.log(autos.length); //Imprime la cantidad de elementos, 4
autos[autos.length] = 'Cadillac'; //Otra forma de añadir elementos pero sin usar push

console.log(autos);

autos[6] = 'Porshe'; //Agrgear elementos, pero dejando un espacio vacio en el lugar 5
console.log(autos);

//-------------------------------------------------------------------------------------------//

//Preguntar si es array
//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

autos[1] = 'MerecedesBenz';
console.log(autos[1]);

autos.push('Audi');
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

autos[6] = 'Porshe';
console.log(autos);

console.log(typeof autos); //Tipo de elementos

console.log( Array.isArray(autos) ); //Es array??

console.log( autos instanceof Array); //Si autos es una instancia de cierto tipo "array"

//-------------------------------------------------------------------------------------------//