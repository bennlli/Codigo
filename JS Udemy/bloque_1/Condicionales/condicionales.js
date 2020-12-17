/* Condicional simple */
let num = 5;
let num1 = 9

/* Uso de comillas ' `` ' */
if (num>0) console.log(`${num} es mayor que 0`);

if (num1>5) {
    console.log(`${num1} es mayor que 0`);
    console.log(`${num1} es mayor que 0`);
}

/* Condicional compuesto */
let num2=-1;
if (num2>0) {
    console.log(`${num2} es mayor que 0`);
}else{
    console.log(`${num2} es menor que 0`);
}

/* Condicional múltiple */ 
let num3=-1;
if (num3>0) {
    console.log(`${num3} es mayor que 0`);
}else if(num3<0){
    console.log(`${num3} es menor que 0`);
}else{
    console.log(`${num3} es igual a 0`);
}

/* Operadores lógicos */
/* '&& and'  y '|| or' */
let num4=1;
let num5=12;
/* && */
if (num4>0 && num5>0) {
    console.log(`${num4} y ${num5} son mayores que 0`);
}
let num6=-1;
let num7=5;
/* || */
if (num6>0 || num7>0) {
    console.log(`${num6} es menor que 0`);
}

let word = 'Hola';

if (word.length>5) {
    console.log(`${word} Tiene más de 5 letras`);
}else if (word.length<5) {
    console.log(`${word} Tiene menos de 5 letras`);    
}else{
    console.log(`${word} Tiene 4 letras`);
}

let respuesta = false;
if(respuesta==true) console.log(`Respuesta tiene el valor true`);
if(respuesta==false) console.log(`Respuesta tiene el valor false`);
/* Forma de poner correcta */
if(respuesta) console.log(`Respuesta tiene el valor true`);
if(!respuesta) console.log(`Respuesta tiene el valor false`);