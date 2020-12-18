/*
4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad.
*/
let numero = prompt('Introduce un numero entero mayor que \'1\'.');
let numero_final = parseInt(numero);

if (numero_final >= 0) {
    if (numero_final % 2 == 0) {
        console.log('No es primo.');
    } else {
        console.log('Es primo.')
    }

} else {
    console.log('no es mayor que cero.')
}
