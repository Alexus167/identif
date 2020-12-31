/*Crear una funcion que reciba dos parametros: 'user' y 'password'. Usando SWITCH mostrar en consola los siguientes mensajes, según corresponda:
1.- "Bienvenido a nuestro sitio!", (si el usuario es "admin" y la contraseña es 1234)
2.- Contraseña incorrecta
3.- Usuario incorrecto
4.- Usuario y Contraseña incorrectos
5.- Debe ingresar los datos requeridos
*/

let user = "admin";
let password = 1234;
function login(user, password){
    switch (user, password) {
        case "admin", 1234: console.log("Bienvenido a nuestro sitio!");
            
            break;
         case "admin", password != 1234 : console.log("Contraseña incorrecta");   
            break;
          case user != "admin", 1234: console.log("Usuario incorrecto");
            break;
          case user!="admin",password!=1234 : console.log("Usuario y Contraseña incorrectos");    
        default: console.log("Debe ingresar los datos requeridos");
            break;
    }
}
 login("",0)