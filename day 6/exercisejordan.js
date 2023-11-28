//1
function sum(...arrn) {
  return arrn.reduce((go, curr) => go + curr);
}
console.log(sum(1, 2, 3, 4));

//2
//cara panjang
function a(arrs) {
  let temp = [];
  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs[i].length; j++) {
      if (arrs[i].charAt(j) == "a") {
        temp.push(arrs[i]);
        break;
      }
    }
  }
  console.log(temp);
}
const arrs = ["udin", "naruto", "sakura"];
a(arrs);

//cara pendek
function filter(arrs) {
  return arrs.filter((tr) => tr.includes("a"));
}
console.log(filter(arrs));

//3
function five(arrn) {
  return arrn.map((val) => val + 5);
}
console.log(five([2, 3, 4, 5]));

//4
function ACDC(x, arrn) {
  if (x == "ascending") {
    return arrn.sort((a, b) => a - b);
  } else if (x == "descending") {
    return arrn.sort((a, b) => b - a);
  } else {
    return "silahkan pilih ascending atau descending";
  }
}
console.log(ACDC("ascending", [5, 4, 3, 1, 2]));
console.log(ACDC("descending", [5, 4, 3, 1, 2]));
console.log(ACDC("asal", [5, 4, 3, 2, 1]));

//5
