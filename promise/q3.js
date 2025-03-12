const p = new Promise((res, rej) => {
  setTimeout(() => {
    res(4);
  }, 1000);
});

p.then((v) => {
  console.log(v);
  return v * 2;
})
  .then((v) => {
    console.log(v);
    throw v * 2;
  })
  .then((v) => {
    console.log(v);
    return v - 2;
  })
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("error", e);
  });
