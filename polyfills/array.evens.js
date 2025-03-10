//polyfil even

Array.prototype.even = function () {
  //return an array of even numbers
  let array = this;
  let output = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      output.push(array[i]);
    }
  }
  return output;
};

const arr1 = [1, 4, 2, 6, 5, 8, 0, 9, 2];

let e = arr1.even();
console.log(e);
