//Polyfill for map()

//array.map((element,i,arr)=>{})

Array.prototype.betoMap = function (funcion) {
  let nuevoArray = [];
  for (let i = 0; i < this.length; i++) {
    nuevoArray.push(funcion(this[i], i, this));
  }
  return nuevoArray;
};

const numeros = [1, 2, 3, 4];
//escrita con una funcion normal
const multiplicaPorTres = numeros.betoMap(function (numero, index, arr) {
  console.log(numero);
  console.log(index);
  console.log(arr);
});
