//map vs foreach

//En resumen, la diferencia principal entre map() y forEach() radica en su propósito: map() se utiliza para transformar elementos y crear un nuevo arreglo, mientras que forEach() se utiliza para ejecutar una operación en cada elemento del arreglo sin modificar el arreglo original ni crear uno nuevo.

const arrayNumeros = [2, 5, 3, 4, 7];

const resultadoMapeo = arrayNumeros.map(function (elemento, index, array) {
  return elemento + 4;
});

const resultadoForEach = arrayNumeros.forEach(function (
  elemento,
  index,
  array
) {
  arrayNumeros[index] = elemento + 2; //modificamos el array original
});

console.log(resultadoMapeo);
console.log(resultadoForEach); //undefined
console.log(arrayNumeros);
