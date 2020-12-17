/*
Ordenar 3 números de mayor a menor
Permutaciones con 3 elementos
Posibilidades 3! = 3*2*1 = 6
abc - 321
acb - 312
bac - 213
bca - 132
cab - 213
cba - 123
*/

// Usamos el 'document.getElementById' para referenciarnos al 'HTML' donde mostraremos la información.
var numerosJS = document.getElementById('numeros');
var resultadoJS = document.getElementById('resultado');

// Usamos 'prompt' para crear una ventana donde nos pida cada uno de los casos, y sera almancenado en la variable.
let num1=prompt('Introduce el primer número:');
let num2=prompt('Introduce el segundo número:');
let num3=prompt('Introduce el último número');

// 'textContent' propiedad para poner el contenido de esa etiqueta en un 'document.getElementById'.
numerosJS.textContent = `Los números introducidos son ${num1}, ${num2} y ${num3}`;

if(num1>=num2 && num1>=num3){
    if(num2>num3){
        resultadoJS.textContent = `El orden es: ${num1}, ${num2}, ${num3}`;
    }else{
        resultadoJS.textContent = `El orden es: ${num1}, ${num3}, ${num2}`;  
    }
}else if(num2>=num1 && num2>=num3){
    if(num1>num3){
        resultadoJS.textContent = `El orden es: ${num2}, ${num1}, ${num3}`;
    }else{
        resultadoJS.textContent = `El orden es: ${num2}, ${num3}, ${num1}`;
    }
}else if (num3>=num1 && num3>=num2){
    if(num1>num2){
        resultadoJS.textContent = `El orden es: ${num3}, ${num1}, ${num2}`;
    }else{
        resultadoJS.textContent = `El orden es: ${num3}, ${num2}, ${num1}`;
    }
}


