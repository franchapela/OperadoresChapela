let form = document.getElementById("btn");

form.addEventListener("submit", validar)

function validar(e){

    e.preventDefault();

    let formulario = e.target;

    valor = form.children[0].value;

    calculo = (14+(Math.log10(valor)));

    console.log(calculo.toFixed(2));
}