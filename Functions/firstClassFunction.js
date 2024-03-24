//Functions in JavaScript
//Q3 - What are first class Function?

function circle(num) {
  return num * num;
}

function displayCircle(fn) {
  console.log("circle is " + fn(5));
}

displayCircle(circle);

//Una funcion de primera clase significa que son tratadas como cualquier otro tipo de dato.Esto implica que las funciones pueden ser asignadas a variables, pasadas como argumentos a otras funciones, devueltas como valores de otras funciones y almacenadas en estructuras de datos.

// lo que hacemos en el ejemplo es declarar una funcion circle y una funcion displayCircle que recibe como parametro una funcion. Demostrando que es una funcion de primera clase
