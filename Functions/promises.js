new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Done");
  }, 100);
}).then(function (result) {
  console.log(result);
});

new Promise(function (resolve, reject) {
  console.log(1);
  resolve(2);
}).then(function (result) {
  console.log(result);
});
console.log(3);
