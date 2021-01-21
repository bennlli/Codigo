/*
Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/
let palabra = prompt('Escribe una palabra');
console.log(`La palabra introducida es: ${palabra}`);
//numero de consonantes
num_con = palabra.match(/[b, d, f, g, h, j, k, l, m, n, ñ, p, q, r, s, t, v, x, y, z]/gi).length;
console.log(`Numero de consonantes: ${num_con}`);

//numero de vocales
num_voc = palabra.match(/[a,e,i,o,u]/gi).length;
console.log(`Numero de vocales: ${num_voc}`);

//numero de vocales
num_long = palabra.length;
console.log(`La longitud de la palabra es: ${num_long}`);