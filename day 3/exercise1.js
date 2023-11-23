let n = 9;
let limit = 10;
let i = 1;
while (i <= limit) {
  console.log(n + "*" + i + "=" + n * i);
  i++;
}

let w = "madam";
let c = 1;
let ispalendrom = true;
while (c <= w.length) {
  if (w.charAt(c - 1) != w.charAt(w.length - c)) {
    ispalendrom = false;
    break;
  } else {
    c++;
  }
}
console.log(ispalendrom ? "palindrom" : "bukan palindrom");

let cm = 100000;
let km = cm / 100000;
console.log(km);

let idr = 1000;
let convert = idr.toLocaleString("id-ID");
console.log("Rp." + convert + ",00");

let search = "H";
let word = "Hello world";
let result = word.replace(search, "");
console.log(result);

let Cap = "sekai no kami";
let init = Cap.charAt(0).toUpperCase();
let initial = init + Cap.substring(1);
let ncap = 1;
let finalcap = init;
while (ncap <= Cap.length) {
  if (Cap.charAt(ncap) != " " && ncap <= Cap.length) {
    finalcap += Cap.substring(ncap, ncap + 1);
    ncap++;
  } else {
    finalcap += " " + Cap.charAt(ncap + 1).toUpperCase();
    ncap += 2;
  }
}
console.log(finalcap);

let hello = "hello";
let helc = 0;
let helfis = "";
while (helc <= hello.length) {
  let temp = hello.charAt(hello.length - 1 - helc);
  helfis += temp;
  helc++;
}
console.log(helfis);

let animal = "The QuiCk BrOwN Fox";
let anic = 0;
let finish = "";
while (anic <= animal.length) {
  let temp = animal.charAt(anic);
  if (temp == temp.toUpperCase()) {
    temp = temp.toLowerCase();
    finish += temp;
  } else {
    temp = temp.toUpperCase();
    finish += temp;
  }
  anic++;
}
console.log(finish);
let num1 = 42;
let num2 = 27;
if (num1 > num2) {
  console.log(num1 + " lebih besar dari " + num2);
} else if (num2 > num1) {
  console.log(num2 + " lebih besar dari " + num1);
} else {
  ("kedua angka bernilai sama");
}
let n1 = 42;
let n2 = 27;
let n3 = 18;
if (n1 > n2) {
  let temp = n1;
  n1 = n2;
  n2 = temp;
}
if (n1 > n3) {
  let temp = n1;
  n1 = n3;
  n3 = temp;
}
if (n2 > n3) {
  let temp = n2;
  n2 = n3;
  n3 = temp;
}

console.log(n1, n2, n3);

let x = "halo";
if (typeof x === `string`) {
  console.log(1);
} else if (x * 0 == 0) {
  console.log(2);
} else {
  console.log(3);
}

let sentence = "Lelouch vi Britania";
let change = sentence;
change = sentence.replaceAll("a", "*");
console.log(change);
