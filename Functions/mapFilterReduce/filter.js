// what is filter() ¿?

//la funcion filter toma cada elemento del array y le aplica una condicion, si la condicion regresa true, el elemento es pusheado al nuevo array, y si la condicion regresa false, el elemento no es pusheado al nuevo array.

//La función filter() no modifica el arreglo original, sino que devuelve un nuevo arreglo que contiene solo los elementos que pasaron la condición especificada en la función de filtro.
const numeros = [1, 2, 3, 4];

//escrita con funcion normal
const mayoresQueDos = numeros.filter(function (numero, i, arr) {
  console.log(numero > 2);
  console.log(i);
  console.log(arr);

  return numero > 2;
});

console.log(mayoresQueDos);
//Escrita con arrow function

const mayoresQueTres = numeros.filter((numero, i, arr) => {
  console.log(numero > 2);
  console.log(i);
  console.log(arr);

  return numero > 2;
});

console.log(mayoresQueDos);
