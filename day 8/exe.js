//1
const x = { a: 1 };
const y = { a: 1 };
function similar(x, y) {
  if (JSON.stringify(x) === JSON.stringify(y)) {
    return true;
  } else {
    return false;
  }
}
console.log(similar(x, y));
