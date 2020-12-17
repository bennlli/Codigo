//############################################################################################
                                    // 'INDETERMINADO'
                                    // BUCLE WHILE  
/*
let pass ='';
while(pass!= 'hola'){
    pass = prompt('Introduzca su contraseña');
}

console.log('Fin del bucle');
*/
//############################################################################################
                                    // BUCLE DO ... WHILE
/*
do {
    pass = prompt('Introduzca su contraseña');
} while (pass != 'hola');

console.log('Fin del bucle');
*/
//############################################################################################
                                    // 'DETERMINADOS'
                                    // FOR 
/*
for (let i = 0; i <= 10; i++) {
    console.log(i);
    
}


let numbers = [0,11,33,44,55];

for (let index = 0; index < numbers.length; index++) {
    console.log(`index vale ${index} y el valor de esa posición en el array es ${numbers[index]}`);
}
*/
//############################################################################################
// BUCLES PARA TRABAJAR CON ARRAYS MAS FACÍL QUE FOR TRADICIONAL
                                    // FOR OF 'DEVUELVE EL VALOR'
let names = ['Paco', 'Juan', 'Maria', 'Enma'];
for (let name of names) {
    console.log(name);

}

                                    // FOR IN 'DEVUELVE LA POSICION'
let names1 = ['Daniel', 'Pedro', 'Victoria', 'Enma'];
for (let index in names1) {
    console.log(index);

}