/*
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola _____, tienes _____ años y el año que viene tendrás _____ años"
    Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings.
*/

let nombre = prompt ('Escribe tu nombre, por favor.');
let edad = prompt ('Escribe tu edad, por favor.');
//Usamos 'PARSEINT' para convertir el string a número y así poder sumarle '1'
let edad_mas = parseInt(edad)+1;

console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edad_mas} años.`)