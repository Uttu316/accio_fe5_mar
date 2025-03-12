console.log("A");
const p = new Promise((resolve, reject) => {
  // sync
  console.log("B");
  setTimeout(() => {
    let data = { name: "ABC" };
    let name = prompt("Enter name");
    console.log(name);
    if (name === data.name) {
      resolve(data);
    } else {
      reject("Oops");
    }
  }, 2000);
});

p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
});
