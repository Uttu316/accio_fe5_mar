console.log("A");

function abc() {
  console.log("B");
  setTimeout(() => {
    console.log("C");
  }, 2000);

  console.log("D");
}

console.log("E");

abc();
console.log("F");
