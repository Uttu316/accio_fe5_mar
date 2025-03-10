//task: write a polyfill for Array.prototype.forEach

Array.prototype.myforEach = function (callback) {
  const array = this;

  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};

let arr = [1, 2, 3];

arr.myforEach((item, index, array) => {
  console.log(item);
});
