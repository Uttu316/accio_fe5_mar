function abc(x, y) {
  console.log("A");
  return x + y;
}

function xyz(p, q, callback) {
  console.log("X");
  let x = 2;
  let ans = abc(p, q) + callback(x);
  return ans;
}
function sq(v) {
  console.log("S");
  return v * v;
}
let out = xyz(4, 2, sq);
console.log(out);
