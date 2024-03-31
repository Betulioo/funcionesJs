const getEntrantes = () => {
  const entrantes = [
    "Ensalada César",
    "Bruschetta",
    "Sopa de tomate",
    "Empanadas",
    "Calamares fritos",
    "Hummus con pan pita",
    "Ceviche",
    "Rollitos de primavera",
    "Queso de cabra con miel",
  ];
  return entrantes;
};
const getPrincipales = () => {
  var principales = [
    "Filete de salmón a la parrilla",
    "Lasaña de carne",
    "Pollo al curry",
    "Risotto de champiñones",
    "Bistec con puré de papas",
    "Paella",
    "Hamburguesa gourmet",
    "Pasta Alfredo",
    "Tacos de carne asada",
  ];
  return principales;
};
const getPostres = () => {
  var postres = [
    "Tarta de manzana",
    "Helado de vainilla con salsa de chocolate",
    "Flan casero",
    "Tiramisú",
    "Coulant de chocolate",
    "Pastel de tres leches",
    "Cheesecake de frutos rojos",
    "Crema catalana",
    "Profiteroles",
  ];
  return postres;
};
function nombreFuncion(arrayEntrantes, arrayPrincipales) {
  const entrantesYPrincipales = arrayEntrantes.map(function (entrante) {
    return arrayPrincipales.map((principal) => {
      return entrante + " " + principal;
    });
  });
  return entrantesYPrincipales;
}
function nombreFuncion2(arrayEntrantesConPrincipales, arrayPostres) {
  const arr = arrayEntrantesConPrincipales.map(function (element, i) {
    return arrayPostres.map(function (postre) {
      return element + " " + postre;
    });
  });
  return arr;
}
function reducese(arraytotal) {
  const result = arraytotal.reduce(function (acumulador, element) {
    return acumulador.concat(element);
  }, []);
  return result;
}
const init = () => {
  const entrantes = getEntrantes();
  const principales = getPrincipales();
  const postres = getPostres();
  const entrantesConPrincipales = nombreFuncion(entrantes, principales);
  const entrantePrincipalReduced = reducese(entrantesConPrincipales);
  const final = nombreFuncion2(entrantePrincipalReduced, postres);
  const finalReduced = reducese(final);
  console.log(finalReduced);
};
init();
// const miArray = ["Bruschetta", "Sopa de tomate", "Empanadas"];
// const miArray2 = [
//   "Filete de salmón a la parrilla",
//   "Lasaña de carne",
//   "Pollo al curry",
// ];
// console.log(miArray[0] + miArray2[1]);

// for (let index = 0; index < miArray.length; index++) {
//   const entrante = miArray[index];
//   console.log(element);
// }

// for (const element of miArray) {
//   element + element;
// }

// miArray[0];
