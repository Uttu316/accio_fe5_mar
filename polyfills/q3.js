let obj = { a: 1 };

let b = {};
let c = {};

// console.log(b.toString()): [object Object]

obj[b] = 9;
obj[c] = 0;

console.log(obj);
