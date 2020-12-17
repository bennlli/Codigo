/*
*****************************************************************************
    selecion multiple con 'alt' y clicando sobre el que qeramos modificar
*****************************************************************************

Sintaxis simple
switch(evaluación){
    case n:
        //código
        break;
    case n2:
        //código
        break;

    default:
        //código
}


Sintaxis múltiple
Sintaxis múltiple
switch(evaluación){
    case n:
    case n2:
    case n3:
    case n4:
        //código
        break;
    case n5:
    case n6:
        //código
        break;  

    default:
        //código
*/

//Sintaxis simple
let num = 3;
switch (num) {
    case 1:
        console.log(`${num} tiene el valor 1`);
        break;
    case 2:
        console.log(`${num} tiene el valor 2`);
        break;
    default: console.log(`${num} no vale ni 1 ni 2`);
}

//Sintaxis multiple 
let num1 = 5;
switch (num1) {
    case 1:
    case 3:
    case 5:   
        console.log(`${num1} es impar`);
        break;
    case 2:
    case 4:
    case 6:                                                                                                                     
        console.log(`${num1} es par`);
        break;
}