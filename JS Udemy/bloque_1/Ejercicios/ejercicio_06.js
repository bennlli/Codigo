/*
6 - Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50.
    Cuando este ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido.
*/
let numero = prompt('Introduce un numero: ');
let numFinal = parseInt(numero);

let total = 0;
    if (numFinal >= 50) {
        console.log('El valor mayor que 50');
        
    } else {
        let numero1 = prompt('Introduce un otro numero: ');
        let numFinal1 = parseInt(numero1);
        total = numFinal + numFinal1;
        console.log(`total en el primera suma ${total}`)

        for (let i = 0; i < 50; i++) {
            let numero2 = prompt('Introduce un otro numero: ');
            let numFinal2 = parseInt(numero2);
            total = total + numFinal2;
            console.log(`La suma es del bucle ${total}`)
    
            if (total>50) {
                console.log(`El total es ${total} y nos pasamos de 50`)
                break;
            }
            
        }
      
    }