const limit = 5;
function triangle(height) {
  let construct = 1;
  console.log(construct + "");
  let go = 1;
  while (go < height) {
    go++;
    construct += " " + go;
    console.log(construct);
  }
}
triangle(limit);

const arr = [10, 55, 79, 32];
function max(arr) {
  let maxval = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maxval < arr[i]) {
      maxval = arr[i];
    }
  }
  console.log(maxval);
}
max(arr);

const height = 10;
function tri2(height) {
  let construct = "0" + "1";
  console.log(construct + "");
  let go = 1;
  let baris = 1;
  while (go < height) {
    go++;
    baris++;
    if (go <= 9) {
      construct = "0" + go;
    } else {
      construct = go;
    }
    let gon = go + 1;
    let count = 1;
    while (count < baris) {
      if (gon > height) {
        break;
      }
      if (gon <= 9) {
        construct += " " + "0" + gon;
      } else {
        construct += " " + gon;
      }
      gon++;
      count++;
    }
    console.log(construct);
    go += baris - 1;
  }
}
tri2(height);

const n = 15;
function fb(n) {
  let count = 1;
  let word = "";
  while (count < n) {
    if (count % 3 == 0 && count % 5 == 0) {
      word += "FizzBuzz, ";
    } else if (count % 3 == 0) {
      word += "Fizz, ";
    } else if (count % 5 == 0) {
      word += "Buzz, ";
    } else {
      word += count + ", ";
    }
    count++;
  }
  if (n % 3 == 0 && n % 5 == 0) {
    console.log(word + "FizzBuzz");
  } else if (n % 3 == 0) {
    console.log(word + "Fizz");
  } else if (n % 5 == 0) {
    console.log(word + "Buzz");
  } else {
    console.log(word + n);
  }
}
fb(n);

const W = 96;
const H = 1.8;
function BMI(W, H) {
  let BMI = W / H ** 2;
  if (BMI < 18.5) {
    console.log("less weight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("ideal");
  } else if (BMI >= 25 && BMI <= 29.9) {
    console.log("overweight");
  } else if (BMI >= 30 && BMI <= 39.9) {
    console.log("very overweight");
  } else {
    console.log("obesity");
  }
}
BMI(W, H);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function odd(arr2) {
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 != 0) {
      arr2.splice(i, 1);
    }
  }
  console.log(arr2);
}
odd(arr2);

const words = "Hellow World";
function split(words) {
  const WtoA = words.split(" ");
  console.log(WtoA);
}
split(words);
