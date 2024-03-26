//what is reduce() ¿?

//Es una funcion que reduce todos los valores de un array a uno solo.

const numeros = [1, 2, 3, 4];

//escrita con funcion normal
const suma = numeros.reduce(function (acumulador, elementoActual, i, array) {
  console.log(acumulador);
  console.log(elementoActual);
  console.log(i);
  console.log(array);
  return acumulador + elementoActual;
}, 0);

//acumulador es el resultado de la computacion anterior. Y lo definimos con el 0 al final. Si no lo definimos el valor inicial del acumulador será el primer elemento del array.

//elementoActual será el valor del elemento en esa vuelta.

console.log(suma);
//escrita con funcion arrow

const sumamos = numeros.reduce((acumulador, elementoActual, i, array) => {
  console.log(acumulador);
  console.log(elementoActual);
  console.log(i);
  console.log(array);
  return acumulador + elementoActual;
}, 0);
