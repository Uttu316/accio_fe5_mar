const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("A");
  }, 1000);
}); //1000 rej
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("B");
  }, 500);
}); //500 res

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("C");
  }, 2000);
}); //2000 res

const pa = Promise.race([p1, p2, p3]);

pa.then((values) => {
  console.log(values);
}).catch((e) => {
  console.log(e);
});
