/*
2 - Escribe un programa que pueda calcular el área de 3 figuras geomémtricas, triángulo, rectángulo y círculo. En primer lugar de qué figura
    quiere calcular el área, después solicita los datos que necesites para calcularlos.
        Triángulo = b*h/2
        Rectángulo = b*h
        Círculo = pi *r2 (pi *radio al cuadrado)
*/

let figura = prompt('¿Qué área quieres calcular? \n \'Triángulo\', \'Rectángulo\' o \'Círculo\'.')
console.log(figura);

if (figura == 'Triángulo') {
    let base = prompt('Dime la base del triángulo.');
    let altura = prompt('Dime la altura del triángulo.');
    let area_tri = (parseFloat(base * altura)) / 2;
    console.log(`El área del Triángulo = ${area_tri} cm.`);
} else if (figura == 'Rectángulo') {
    let base = prompt('Dime la base del rectángulo.');
    let altura = prompt('Dime la altura del rectángulo.');
    let area_rec = (parseFloat(base * altura));
    console.log(`El área del Rectángulo = ${area_rec} cm.`);
}else if(figura == 'Círculo'){
    let radio = prompt('Dime el radio.');
    let area_cir = Math.PI * Math.pow((parseFloat(radio)),2);
    console.log(`El radio del círculo = ${area_cir} cm.`);
}else{
    console.log('Ninguno de los introducidos pertenece a los mencionados anteriormente.')
}