//Functions in JavaScript
//Q12 - Callback Function

//Es una funcion pasada a otra funcion como argumento, el cual es invocada dentro de la funcion receptora en algun punto de su ejecucion.La funcion callcabk se ejecuta posteriormente, despues de que la funcion receptora haya completado su trabajo o en respuesta a un evento particular.

function saludar(nombre) {
  console.log("Hola " + nombre);
}

function ejecutarSaludar(callback) {
  var nombre = "Luis";
  callback(nombre);
}

ejecutarSaludar(saludar); // "Hola Luis"
