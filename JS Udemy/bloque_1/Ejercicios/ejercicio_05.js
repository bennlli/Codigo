/*
5 - Escribe un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
        !5 = 5*4*3*2*1 = 120
*/
let numeroFac = prompt('Introduce un numero par calcular su factorial');
let numFacFinal = parseInt(numeroFac);
var total = 1;
for (let index = 1; index <= numFacFinal; index++) {
    total = total * index;
}

console.log(`El numero factorial es ${total}`);
