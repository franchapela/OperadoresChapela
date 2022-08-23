//Función para pedir un número al usuario.
let pedirNum = () => {
        
    let num = prompt(`¡Hola! Por favor ingresa un número entre 1-999.999.999, si el mismo es par, el fondo será verde, de caso contrario el fondo será rojo:`);

    //Bucle while para corroborar el número.
     while((isNaN(num)) || (num > 999999999) || (num < 1) || (num === null)){
         num = prompt(`El número ingresado no es válido. Ingresa un número entre 1-999.999.999, si el mismo es par, el fondo será verde, de caso contrario el fondo será rojo:`);
    }

    //Devuelvo el resultado.
    return num; 
}

//Funcion que toma el objeto padre y un número para comprobar si es par o no.
let esPar = (obj, num) => {

    //Creo un "p";
    let p = document.createElement('p');

    //Verifico si el número es par o impar.
    let resultado = parseInt(num)%2;

    //Aviso al obj que creé un hijo "p";
    obj.appendChild(p);

    //Se informa al usuario si el número ingresado es par o impar, cambiando a su vez el color del obj.
    if(resultado === 0){
        obj.className = "container par";
        p.innerHTML = `El número ${num} es par.`;
    }
    else{
        obj.className = "container impar";
        p.innerHTML = `El número ${num} es impar.`;
    }
}

//Obtengo el div que se encuentra en el html con el id "container".
let container = document.getElementById("container");

//Llamo a la función "esPar".
esPar(container, pedirNum());