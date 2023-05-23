


    alert ('Bienvenido a la Calculadora cientifica que calcula el iva y dicta las tabalas');


let operador = prompt('Que desea hacer:    1- Sumar  ///    2- Restar  ///    3- Multiplicar ///    4- Dividir  ///    Luego podras Calcular Iva y consultar las tablas');
let numero1 = Number(prompt('Ingrese el primer numero'));
let numero2 = Number(prompt('Ingrese el segundo numero'));
let total;


if(operador == 1){
    total = numero1+numero2;
    alert('La suma es de '+total);
}
else if(operador == 2){
    total = numero1-numero2;
    alert('La resta es de '+total);
}
else if(operador == 3){
    total = numero1*numero2;
    alert('La multiplicacion es de '+total);
}
else if(operador == 4){
    total = numero1/numero2;
    alert('La division es de '+total);
}



let valorProducto = parseFloat(prompt('Ingrese el valor en pesos para calcular su Iva'));

calcularIva(valorProducto);

function calcularIva(precio){
    let iva = precio * 0.21;
    alert('El iva de $'+precio+' es de $'+iva);
}


let ingresarNumero = parseInt(prompt("Ingresar Numero de la tabla que quieras consultar"));

let resultado;
for (let i = 1; i <= 10; i++) {
    resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}