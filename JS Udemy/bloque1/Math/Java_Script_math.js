/*
Objeto Math

Objeto estático

Tenemos que usar su nombre para utilizarlo

Propiedades:
    Math.E - Math.Pi

Métodos:
    Math.abs(x) Devuelve el valor absoluto de X
    Math.ceil(x) Devuelve elñ entero más grande mayor o igual que un número.
    Math.floor(x) Devuelve el entero más pequeño menor o igual que un número.
    Math.pow(x,y) Devuelve la potencia de x elevado a y.
    Math.sqrt(x) Devuelve la raiz cuadrada de x.
    Math.round(x) Devuelve el valor de un número redondeado al entero más cercano.
    Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.
*/

// Constate de Eule
console.log(Math.E);
console.log(Math.PI);

let num = -5;
let num1 = 5.3;
let num2 = 6.9;

console.log(Math.abs(num));
console.log(Math.ceil(num1));
console.log(Math.floor(num2));
// Base y exponente
console.log(Math.pow(3,3));
// Generar numero 100 primeros, redondeados
console.log(Math.round(Math.random()*100));
// (Math.random() * (max - min)+min) #Generamos un numero entre 10 y 1
console.log(Math.round(Math.random()*(10-1)+1));
// Para saber si es negativo o positivo ## -1 / 0 / 1
console.log(Math.sign(5)); 
console.log(Math.sqrt(9));
