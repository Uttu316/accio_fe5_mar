//task: write a polyfill for Array.prototype.map

Array.prototype.myMap = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    let res = callback(this[i], i, this);
    output.push(res);
  }
  return output;
};

let arr = [1, 2, 3, 4];

let res = arr.myMap((item) => item % 2 === 0);
console.log(res);
