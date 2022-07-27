let num = 0;
let num2 = 0;
let num3 = 1;
const operacion = prompt("Ingrese la operación a realizar, sumar, restar, dividir(Sólo 2 valores), multiplicar:");
const nums = prompt("Cantidad de números a " + operacion);

switch(operacion){
    case "sumar":
        for(let i = 0; i<nums; i++){
            num2 = Number(prompt("Ingrese un número:"));
            num = num + num2;
        }
        alert("El resultado es: " + num);
        break;
    case "restar":
        for(let i = 0; i<nums; i++){
            num = Number(prompt("Ingrese un número:"));
            num = num - num2; //Resto 0 al primer número ingresado para luego poder guardarlo.
            num2 = num; //Guardo el número ingresado para poder restarlo con el próximo.
        }
        alert("El resultado es: " + (num*-1));
        break;
    case "dividir":
        for(let i = 0; i<nums; i++){
            num = Number(prompt("Ingrese un número:"));
            num2 = num3/num; //En la primer vuelta no cumple función, luego va a invertir la operación de "num" para realizar una correcta división.
            num = num/num3; //Divido num por 1(num3), así me devuelve el valor de num la primera vez y lo puedo almacenar correctamente.
            num3 = num; //Almaceno el primer num ingresado.
        }
        alert("El resultado es: " + num2);
        break;
    case "multiplicar":
        for(let i = 0; i<nums; i++){
            num = Number(prompt("Ingrese un número:"));
            num = num3 * num; //Multiplico 1(num3) por el valor ingresado en la primer vuelta, luego el valor ingresado se almacena en num3 y este se va multiplicando por los nuevos valores y actualizándose.
            num3 = num;
        }
        alert("El resultado es: " + num);
        break;
    default:
        alert("La operación solicitada no es válida, por favor recargue la página y vuelva a intentar.");
}
