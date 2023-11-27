function mult(factor) {
  return function (number) {
    return number * factor;
  };
}
const mul4 = mult(4);
const mul5 = mult(5);
console.log(mul4(3));
console.log(mul5(2));
