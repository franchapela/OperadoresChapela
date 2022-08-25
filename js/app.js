//Función para obtener el valor del select.
const opcion = () => {
    let seleccion = document.querySelector('#calculo').selectedIndex

    return seleccion;
}
//Función para calcular el pH mediante OH.
const phOh = () => {
    
    //Cambio el placeholder del input para informar que debe introducirse.
    input.placeholder = ('OH- en mol/L');
    //Cambio el span con la fórmula que se utiliza para este cálculo.
    formula.innerText = "pH = 14 + log([OH-])"
    //Evento onclick
    btn.onclick = e =>{

        //Tomo el valor ingresado por el usuario y lo paso a number.
        valor = parseInt(input.value, 10);
        //Realizo el cálculo.
        calculo = (14+(Math.log10(input.value)));
        //Llamo a la variable de verificación.
        verificar(valor, calculo);

    }
}
//Función para calcular el pH mediante H.
const phH = () => {
    //Cambio el placeholder del input para informar que debe introducirse.
    input.placeholder= ('H+ en mol/L');
    //Cambio el span con la fórmula que se utiliza para este cálculo.
    formula.innerText = "pH = -log([H+])";
    //Evento onclick
    btn.onclick = e =>{
        //Tomo el valor ingresado por el usuario y lo paso a number.
        valor = parseInt(input.value, 10);
        //Realizo el cálculo.
        calculo = (-(Math.log(input.value)));
        //Llamo a la variable de verificación.
        verificar(valor, calculo);

    }
}
//Función para calcular pH con pOH y pKw.
const phPohPkw = () => {
    
    input.placeholder= ('pOH de la base');

    formula.innerText = "pH = 14 - pOH"

    btn.onclick = e =>{

        valor = parseInt(input.value, 10);

        calculo = (14 - input.value);
        //Hago un cambio en la verificación, ya que en este cálculo el valor introducido no puede ser mayor a 14.
        if((valor <= 0) || (valor > 14) || (isNaN(valor))){

            resultado.innerText = "Valor no admitido, intente con números mayores a 0 y menores a 15.";
    
        }
        else{
    
            resultado.innerText = calculo.toFixed(2);
    
        }

    }

}
//Función para calcular pOH con OH.
const pohOh = () => {
    
    input.placeholder= ('OH- en mol/L');

    formula.innerText = "pOH -log([OH-])";

    btn.onclick = e =>{

        valor = parseInt(input.value, 10);

        calculo = (-(Math.log(input.value)));

        verificar(valor, calculo);

    }
}
//Función para calcular pOH con H.
const pohH = () => {
    
    input.placeholder= ('H+ en mol/L');
    formula.innerText = "pOH = 14 + log([H+])";

    btn.onclick = e =>{

        valor = parseInt(input.value, 10);

        calculo = (14+(Math.log(input.value)));

        verificar(valor, calculo);

    }
}
//Función para calcular pOH con pH y pKw.
const pohPhPkw = () => {
    
    input.placeholder= ('Ingresa el Ph');
    formula.innerText = "pOH = 14 - pH"

    btn.onclick = e =>{

        valor = parseInt(input.value, 10);

        calculo = (14 - input.value);
        //Hago un cambio en la verificación, ya que en este cálculo el valor introducido no puede ser mayor a 14.
        if((valor <= 0) || (valor > 14) || (isNaN(valor))){

            resultado.innerText = "Valor no admitido, intente con números mayores a 0 y menores a 15.";
    
        }
        else{
    
            resultado.innerText = calculo.toFixed(2);
    
        }

    }
}
//Función para verificar el valor introducido.
const verificar = (valor, calculo) => {
    //Si el valor es < 0 o NaN, se informa al usuario. De caso contrario, se digita el resultado con dos decimales.
    if((valor <= 0) || (isNaN(valor))){

        resultado.innerText = "Valor no admitido, intente con números mayores a 0";

    }
    else{

        resultado.innerText = calculo.toFixed(2);

    }
}

//Inicializo var que uso para parseInt.
let valor;

//Var para realizar los cálculos.
let calculo;

//Almacena al botón "Calcular".
let btn = document.querySelector('#btn');

//Toma el número del usuario.
let input = document.getElementById('valor');

//Guarda el div donde se imprime el resultado.
let resultado = document.getElementById('resultado');

//Span que muestra la fórmula que se está utilizando.
let formula = document.getElementById("formula");

//Almaceno el índice en el que se encuentra mi select.
let seleccion = document.querySelector('#calculo').selectedIndex;

//Select del html.
let selector = document.getElementById('calculo');

//Llamo a la función de la primera opción.
phOh();

//Utilizo onchange con un switch para cambiar dependiendo de la selección del usuario.
selector.onchange = function(){
    switch(opcion()){
        case 0:
            phOh();
            break;
        case 1:
            phH();
            break;
        case 2:
            phPohPkw();
            break;
        case 3: 
            pohOh();
            break;
        case 4:
            pohH();
            break;
        case 5:
            pohPhPkw();
            break;
    }
}