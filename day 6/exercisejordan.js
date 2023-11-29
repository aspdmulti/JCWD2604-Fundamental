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
function add(arrn, newel) {
  let cek = arrn.includes(newel);
  if (cek == false) {
    arrn.push(newel);
  }
  return arrn;
}
console.log(add([1, 2, 3, 4, 5], 7));

//6
function sumnih(arr1, arr2) {
  return arr1.concat(arr2).reduce((go, curr) => go + curr);
}
console.log(sumnih([1, 2], [3, 4]));

//7
let contoh = [1, 2, 3, [4, 5, [6, 7, 8]]];
function dearr(arr) {
  arr.forEach((val) => {
    if (!Array.isArray(val)) {
      console.log(val);
    } else {
      val.forEach((val2) => {
        if (!Array.isArray(val2)) {
          console.log(val2);
        } else {
          val2.forEach((val3) => {
            console.log(val3);
          });
        }
      });
    }
  });
}
dearr(contoh);
//8
function ascii(string = "") {
  let numbersum = 0;
  for (let i = 0; i < string.length; i++) {
    numbersum += string.charCodeAt(i);
  }
  return numbersum;
}
console.log(ascii("aa"));

//9
const rec = (n, total = 0) => {
  if (n > 0) return rec(n - 1, (total += n));
  return total;
};
console.log(rec(5));

//10
function searchi(arr, x) {
  const r = [];
  arr.map((val, i) => {
    if (val == x) {
      r.push(i);
    }
  });
  return r;
}
console.log(searchi([1, 2, 3, 4, 2, 3, 2], 2));

//11
function oe(...arr) {
  return arr.map((val) => (val % 2 == 0 ? "genap" : "ganjil"));
}
console.log(oe(1, 2, 3, 4));
