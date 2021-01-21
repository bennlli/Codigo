/*
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después 
    multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número
    en el array de pares y si es impar en el array de impares. Muestra por consola:
        - La multiplicación que se produce junto con su resultdo con el formato 2 x 3 = 6
        - El array de pares e impares
*/
var numeros = [15, 22, 31, 14, 5];
var par = [];
var impar = [];

// Para devolver numeros INT, si no solo fuera math.random devolveria 0.045..
let num_ram = Math.floor(Math.random() * 10);

for (let value of numeros) {
    console.log(`El número random es ${num_ram} X ${value}.`)
    value = value * num_ram;
    console.log(`El número seria ${value}.`)
    if (value % 2 == 0) {
        par[value]=value;
    } else {
        impar[value]=value;
    }
}
console.log('---------------');
for (const nums_par of par) {
    console.log(`Los valores introducidos par son: ${nums_par}`);
}
console.log('---------------');
for (const nums_impar of impar) {
    console.log(`Los valores introducidos impar son: ${nums_impar}`);
}
console.log('---------------');
for (const num of numeros) {
    console.log(num);
}