const tom = () => console.log("Tom");
const jerry = () => console.log("Jerry");
const doggy = () => console.log("Doggy");

const cartoon = () => {
  console.log("Cartoon");

  setTimeout(tom, 50);
  setTimeout(doggy, 30);

  new Promise((resolve, reject) => resolve("A")).then((resolve) =>
    console.log(resolve)
  );
  new Promise((resolve, reject) => resolve("B")).then((resolve) =>
    console.log(resolve)
  );

  jerry();
};

cartoon();
