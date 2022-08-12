//function que pida datos, almacene en un objeto los datos personales de cada persona (obj fuera o dentro?) y otra que sortee un número de math.floor(math.random)*array.length y luego de los datos del ganador como objetos.
let nombre = []
let dni = []
let tel = []
let participantes;

const datos = () =>{
    let vnombre;
    let vdni;
    let vtel;
    do{
        participantes = prompt("Ingrese la cantidad de participantes: ");
        //Comprueba si el dato ingresado es un número válido o un string.
        if(isNaN(participantes) == true){ 
            alert("Valor no válido, ingrese un número para indicar la cantidad de participantes.");
        }
    }while(isNaN(participantes) == true)
    for(let i = 0; i<participantes; i++){
        //do while para pedir el primer dato e ir comprobando si cada uno es válido.
        do{
            //Pedir datos del participante
            nombre[i] = prompt("Nombre del participante"); 
            dni[i] = prompt("Número de dni");
            tel[i] = prompt("Número de teléfono con el código de área.");
            //Variables para verificar si el valor es número.
            vnombre = isNaN(nombre[i]); 
            vdni = isNaN(dni[i]);
            vtel = isNaN(tel[i]);
            //Verificaciones para alertar al usuario cual es el dato erróneo.
            if((nombre[i].length <= 1) || (vnombre == false)){
                alert("Nombre no válido, por favor ingrese los datos nuevamente.");
            }
            else if((dni[i].length != 8) || (vdni == true)){
                alert("DNI no válido, por favor ingrese los datos nuevamente.");
            }
            else if((tel[i].length < 10) || (vtel == true)){
                alert("Número de teléfono inválido, asegúrese de ingresarlo correctamente.");
            }
            //Condicional while para repetir el do en caso de algún dato erróneo.
        }while(((nombre[i].length <= 1) || (vnombre == false)) || ((dni[i].length != 8) || (vdni == true)) || ((tel[i].length < 10) || (vtel == true)))
    }
}

datos();
//Creación del constructor
class ganador {
    constructor(nombre, dni, tel){
        this.nombre = nombre;
        this.dni = dni;
        this.tel = tel;
    }
}

//Función para sortear y entregar los datos de los ganadores.
const datosganador = () =>{
    let ganadores
    //Utilizo un do while para pedir y validar la cantidad de ganadores.
    do{
        ganadores = prompt("Especificar cantidad de ganadores: ");
        if(isNaN((ganadores) == true)||(ganadores >> participantes)){ 
            alert("Valor no válido, ingrese un número válido para indicar la cantidad de ganadores.");
        }
    }while(isNaN((ganadores) == true)||(ganadores >> participantes))
    for(let i = 0; i<ganadores; i++){
        let num = Math.floor(Math.random()*participantes);    
        const jugador = new ganador(nombre[num],dni[num],tel[num]);
        alert("¡El ganador es " + jugador.nombre);
        document.write("Los datos del mismo son: <br>Nombre: " + jugador.nombre + "<br>DNI: " + jugador.dni + "<br>Teléfono: " + jugador.tel + "<br>");
        nombre.splice(num, 1);
        dni.splice(num, 1);
        tel.splice(num, 1);
    }       
}

datosganador();