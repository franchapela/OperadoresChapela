
  //Declaro el array participante

  let participante = []

  //Declaro la variable para la cantidad de participantes

  let cantParticipantes;

  //Creo una variable booleana que voy a usar para la verificación de datos

  let datoError = false;

//Constructor del objeto jugadores
class jugadores {

    constructor(nombre, dni, tel){
  
      this.nombre = nombre;
  
      this.dni = dni;
  
      this.tel = tel;
  
    }
  }


  //Función para pedir y almacenar los datos de cada participante

  const datos = () =>{

    //Do...while para pedir y comprobar la cantidad de participantes

    do{
        cantParticipantes = prompt("Ingrese la cantidad de participantes: ");

        //Comprueba si el dato ingresado es un número válido o un string

        if(isNaN(cantParticipantes) === true){ 
            alert("Valor no válido, ingrese un número para indicar la cantidad de participantes.");

        }

    }while(isNaN(cantParticipantes) === true)

        //do while para pedir los datos y comprobarlos

        for(let i = 0; i<cantParticipantes; i++){
            do{

                //Invoco el array "participante" y creo los jugadores con él

                participante[i]= new jugadores(

                    nombre = prompt(`Nombre del participante ${i + 1} de ${cantParticipantes}:`),

                    dni = prompt(`Número de dni del participante ${i + 1} de ${cantParticipantes}:`),

                    tel = prompt(`Número de teléfono con el código de área del participante ${i + 1} de ${cantParticipantes}:`)

                )

            //Verificaciones para alertar al usuario cual es el dato erróneo

            if((participante[i].nombre.length <= 1) || (isNaN(participante[i].nombre) !== true)){

                alert("Nombre no válido, por favor ingrese los datos nuevamente.");

                datoError = true;

            }
            else if((participante[i].dni.length !== 8) || (isNaN(participante[i].dni === true))){

                alert("DNI no válido, por favor ingrese los datos nuevamente.");

                datoError = true;

            }
            else if((participante[i].tel.length < 10) || (isNaN(participante[i].tel === true))){

                alert("Número de teléfono inválido, asegúrese de ingresarlo correctamente.");

                datoError = true;

            }
            else{

                datoError = false;

            }

            //Condicional while para repetir el do en caso de algún dato erróneo.

        }while(datoError === true)
    }
  }

//Función para sortear y entregar los datos de los ganadores.

const datosganador = () =>{
    let ganadores

    //Utilizo un do while para pedir y validar la cantidad de ganadores.

    do{

        ganadores = prompt("Especificar cantidad de ganadores: ");

        if(isNaN((ganadores) === true) || (ganadores >> cantParticipantes)){ 

            alert("Valor no válido, ingrese un número válido para indicar la cantidad de ganadores.");

        }

    }while(isNaN((ganadores) === true) || (ganadores >> cantParticipantes))

    //Bucle for para realizar el sorteo según la cantidad de ganadores que se soliciten.

    for(let i = 0; i<ganadores; i++){

        //Genero y almaceno un número aleatorio con math.random entre la cantidad de participantes y lo redondeo con math.floor

        let num = Math.floor(Math.random()*cantParticipantes);

        //Utilizo el número generado para acceder a los datos en esa posición del array "participante"
        
        alert("¡El ganador es " + participante[num].nombre + "!");

        //Imprimo los datos del ganador

        document.write(`Los datos del mismo son: <br>Nombre: ${participante[num].nombre}<br>DNI: ${participante[num].dni}<br>Teléfono: ${participante[num].tel}<br>`);

        //Utilizo splice para borrar al que ya ganó, así no puede volver a salir a menos que se coloquen dos veces sus datos en el sorteo.

        participante.splice(num, 1);
    }       
}

datos();

datosganador();

