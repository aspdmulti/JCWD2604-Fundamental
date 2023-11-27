const arr = [12, 5, 23, 18, 4, 45, 32];
function sort(arr) {
  let sorting = arr.sort(function (a, b) {
    return a - b;
  });
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  let avg = sum / arr.length;
  console.log(
    "lowest :" +
      arr[0] +
      ", highest :" +
      arr[arr.length - 1] +
      ", average :" +
      avg
  );
}
sort(arr);

const arr2 = ["apple", "banana", "cherry", "date"];
function and(arr2) {
  arr2.splice(arr2.length - 1, 0, "and");
  word = arr2.toString();
  word = word.replace(",and,", ",and ");
  console.log(word);
}
and(arr2);

const words = "Hellow World";
function split(words) {
  const WtoA = words.split(" ");
  console.log(WtoA);
}
split(words);

const hit1 = [1, 2, 3];
const hit2 = [3, 2, 1];
function hitung(hit1, hit2) {
  sum = hit1.map(function (val, i) {
    return val + hit2[i];
  });
  console.log(sum);
}
hitung(hit1, hit2);

const arr3 = [1, 2, 3, 4];
const add = 4;
function push(arr3, add) {
  let check = 0;
  for (let i = 0; i < arr3.length; i++) {
    if (add != arr3[i]) {
      check = 1;
    } else {
      check = 0;
      break;
    }
  }
  if (check == 1) {
    arr3.push(add);
  }
  console.log(arr3);
}
push(arr3, add);

const arr4 = [1, 2, 3, 4, 5, 6];
function odd(arr2) {
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 != 0) {
      arr2.splice(i, 1);
    }
  }
  console.log(arr2);
}
odd(arr4);

const maxsize = 5;
const i1 = 5;
const i2 = 10;
const i3 = 24;
const i4 = 3;
const i5 = 6;
const i6 = 7;
const i7 = 8;
let arrs = [];
function assign(maxsize, i) {
  if (arrs.length < 5) {
    arrs.push(i);
  }
  console.log(arrs);
}
assign(maxsize, i1);
assign(maxsize, i2);
assign(maxsize, i3);
assign(maxsize, i4);
assign(maxsize, i5);
assign(maxsize, i6);
assign(maxsize, i7);

let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
function concat(arr6, arr7) {
  let arr8 = arr6.concat(arr7);
  console.log(arr8);
}
concat(arr6, arr7);

//belum nih
let arr9 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
function dupli(arr9) {
  let arr10 = [];
  for (let i = 0; i < arr9.length; i++) {
    let arrval = arr9[i];
    for (let j = 0; j < arr9.length; j++) {
      if (arrval == arr9[j + 1]) {
        arr10.push(arrval);
        break;
      }
    }
  }
  console.log(arr10);
}
dupli(arr9);
//

//ini belum
let arr11 = [1, 2, 3, 4, 5];
let arr12 = [3, 4, 5, 6, 7];
function blend(arr11, arr12) {
  let checker = 0;
  let arrnew = [];
  for (let i = 0; i < arr11.length; i++) {
    let arrnum = arr11[i];
    for (let j = 0; j < arr12.length; j++) {
      let arr2num = arr12[j];
      if (arrnum == arr2num) {
        checker = 1;
        break;
      }
    }
    if (checker == 0) {
      arrnew.push(arrnum);
      checker = 0;
    } else {
      checker = 0;
    }
  }
  for (let k = 0; k < arr12.length; k++) {
    let arrnum1 = arr12[k];
    for (let l = 0; l < arr11.length; l++) {
      let arr2num2 = arr11[l];
      if (arrnum1 == arr2num2) {
        checker = 1;
        break;
      }
    }
    if (checker == 0) {
      arrnew.push(arrnum1);
      checker = 0;
    } else {
      checker = 0;
    }
  }
  console.log(arrnew);
}
blend(arr11, arr12);
//
