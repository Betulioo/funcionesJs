var entrantes = [
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

const primerafuncion = (arrayEntrantes, arrayPrincipales, arrayPostres) => {
  let entrantesConPrincipales = [];

  arrayEntrantes.map(function (entrante) {
    for (const principal of arrayPrincipales) {
      entrantesConPrincipales.push(entrante + " " + principal);
    }
  });

  return entrantesConPrincipales.map(function (entranteConPrincipal) {
    let entrantesConPrincipalesYPostres = [];

    for (const postre of arrayPostres) {
      entrantesConPrincipalesYPostres.push(entranteConPrincipal + " " + postre);
    }
    return entrantesConPrincipalesYPostres;
  });
};
console.log(primerafuncion(entrantes, principales, postres));
