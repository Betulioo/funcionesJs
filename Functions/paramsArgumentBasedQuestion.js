//Functions in JavaScript
//Q11 - Params vs Arguments - O/P Based Question

//el rest operator recoge el resto de parametros que quedan
const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers); // 2 3 [4,5,6,7,8]
};
fn(1, 2, 3, 4, 5, 6, 7, 8);
