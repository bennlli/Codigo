/*
- Son estructuras que nos permiten almacenar varios datos y agruparlos.
- Se pueden llenar con cualqier tipo de dato válido en JavaScript y deben ir separados por comas.
- Se pueden mezclar tipos de datos, pero no es recomendable.
- Se declaran con llaves cuadradas o corchetes [].
- Pueden declararse vacíos o con un contenido ya establecido.
- Pueden añadirse o eliminarse elementos en el momento que queramos.

    let array = []  <- Array vacío
    let numeros = [1,2,3,4,5]  <- Array con contenido
*/
// Array con números
let arrayNumeros = [1,2,3,4,5];
console.log(arrayNumeros);
console.log(arrayNumeros[3]);

// Array con strings
let palabras = ['Hola','estamos','en','pruebas'];
console.log(palabras[0]);
console.log(`Las palabras "${palabras[3]}" tiene ${palabras[3].length} letras`);
