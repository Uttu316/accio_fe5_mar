console.log("A");

setTimeout(() => {
  console.log("H");
}, 0);
function abc() {
  console.log("B");
  setTimeout(() => {
    console.log("C");
  }, 2000);
  setTimeout(() => {
    console.log("G");
  }, 1000);

  console.log("D");
}

console.log("E");

abc();
setTimeout(() => {
  console.log("I");
});
console.log("F");
