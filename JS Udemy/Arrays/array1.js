let numeros = [1,2,3,4,5,6,7,8,9,10];
/*
    Array - Propiedad
        .length - devuelve el número de posiciones que contiene el array.
*/
console.log(numeros.length); // 10

/*
    Array - Métodos
        Array.isArray(variable a evaluar) - Devuelve true si la variable es un array.
*/
let numero = 4;
console.log(Array.isArray(numero)); // en este caso no es un array
console.log(Array.isArray(numeros)); // en este caso es un array

/*
    Eliminar un elemento
        .shift() - Elimina el primer elemento del array y devuelve ese elemento.
        .pop() - Elimina el último elemento de un array y devuelve ese elemento.
*/
console.log(numeros);
numeros.shift();
console.log(numeros);
/* Almacenamos el eliminado a una variable */
let deletNumero = numeros.pop();
console.log(numeros);
console.log(deletNumero);

/*
    Añadir elementos
        .push(elment1, element2, ...) - Añade uno o más elementos al final del array y devuelve la nueva longitud.
        .unshift(element1, element2, ...) - Añade uno o más elementos al comienzo del array y devuelve la nueva longitud.
*/
numeros.push(11);
console.log(numeros);
/* Podemos al mancenar también en una variable el numero de elementos que tiene el 'array' */
let newLength = numeros.unshift(10);
console.log(numeros);

/*
    .indexOf() - Devuelve el primer índice del elemento que coincida con el valor especificando, o -1 si ninguno es encontrado 
*/
console.log(numeros);
console.log(numeros.indexOf(5));

/*
    .lastIndeOf() - Devuelve el último índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/
console.log(numeros);
console.log(numeros.lastIndexOf(9));

/*
    .reverse() - Invierte el orden de los elementos del array.
*/
console.log(numeros);
numeros.reverse();
console.log(numeros);

/*
    .join('separador') - Devuelve un string con el separador que indiquemos, por defecto son comas, guion '-', etc..
    También podemos guardarlo en una variable
*/
console.log(numeros);
console.log(numeros.join(' - '));

/*
    .splice(a,b,items) - Cambia el contenido de un arrray eliminando elementos existentes y/o agregando nuevos elementos.
        a - Indice de inicio.
        b - Número de elementos (opcional).
        items - Elemento a añadir en el caso de que se añadan (opcional).
*/
// console.log(numeros);
// numeros.splice(7); - Elimina desde la posicion 7 hasta el final.
// numeros.splice(2,2); - Elimina desde la posicion 2 los siguientes valores indicados '2'.
// numeros.splice(2,2,12,15,19,22); - Elimina desde la posicion 2 los siguienes valores indicados '2', pero introduce los items que pongamos.
// numeros.splice(2,0,12,15,19,22); - Añade los elementos desde la posicion 2 sin eleminar los emas.
// console.log(numeros);

/*
    .slice(a,b) - Extrae elementos de un array desde el índice hasta el índice b. Si no existe b lo hace desde a hasta el final, si
    no existe ni a ni b hace una copia del original.  
*/
// Crea los arrays identicos
let newNumeros = numeros.slice();
console.log(numeros);
console.log(newNumeros);

// Crea el array de la posición 2 en adelante
let newNumeros1 = numeros.slice(2);
console.log(numeros);
console.log(newNumeros1);

// Este último caso solo crearia el array desde la posicion 2 hasta la 4
let newNumeros2 = numeros.slice(2,4);
console.log(numeros);
console.log(newNumeros2);