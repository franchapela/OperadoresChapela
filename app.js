let ruser;
let remail;
let rpassword;
const register = () => {
        ruser = prompt("Ingresa tu nombre de usuario: ");
        remail = prompt("Ingresa tu correo: ");
        rpassword;
    let confpass;
    do{
        rpassword = prompt("Ingresa tu contraseña: ");
        confpass = prompt("Vuelve a introducir tu contraseña: ");
        if(rpassword != confpass){
            alert("Las contraseñas no coinciden, vuelva a intentar.")
        }
    }while(rpassword != confpass);
    alert("Registro exitoso.");
    return ruser, remail, rpassword;
}
const login = (a, b, c) => {
    let cont = 0;
    let luser;
    let lpass;
    do{
        cont++;
        luser = prompt("Ingresa tu usuario o correo: ");
        lpass = prompt("Ingresa tu contraseña.");
        if(((luser != a) && (luser != b)) || (lpass != c)){
            alert("Usuario o contraseña incorrecto, vuelva a intentarlo.");
        }
        else{
            alert("Ha ingresado con éxito.");
        }
        if(cont == 3){
            alert("Ha fallado demasiados intentos, por favor comuníquese al +54123456 para recibir soporte o acérquese a la sucursal más cercana.");
            break;
        }
    }while(((luser != a) && (luser != b)) || (lpass != c)); 
}
const start = () => {
    let menu;
    let log;
    do{
        menu = prompt("Bienvenido, ¿qué desea realizar?\n1) Ingresar\n2) Registrarse");
        if(menu == "1"){
            login(ruser, remail, rpassword);
        }
        else if(menu == "2"){
            register();
            log = prompt("¿Desea ingresar ahora? \n1) Si \n2) No");
            if(log == "1"){
                login(ruser, remail, rpassword);
            }
            else if(log == "2"){
                break;
            }
            else{
                alert("Opción inválida, será redirigido al menú principal.");
                menu = "3";
            }
        }
        else{
           alert("Opción inválida, por favor intente otra vez.");
        }
    }while((menu != "1") && (menu != "2"));
    return menu;
}
start();

