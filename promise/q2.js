console.log("A");
const p = new Promise((resolve, reject) => {
  const v = 2;
  console.log("B");
  setTimeout(() => {
    let x = 4;
    console.log("C");
    resolve(x * v);
    console.log("D");
  }, 1000);
  console.log("F");
});
console.log("G");
p.then((v) => {
  console.log(v);
}).catch((e) => {
  console.log(e);
});
console.log("H");
