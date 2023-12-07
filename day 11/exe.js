function find(arr) {
  let counts = {};
  let maxCount = 0;
  let maxDuplicate;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }

    if (counts[num] > maxCount) {
      maxCount = counts[num];
      maxDuplicate = num;
    }
  }

  return maxDuplicate;
}

let numbers = [2, 2, 1, 1, 1, 2, 2];
let result = find(numbers);
console.log(result);

//2
const roman = "V";
function romantonum(roman) {
  let num = roman.split("");
  num = num.map(romanize);
  num.push(0);
  num = sumit(num);
  return num;
}
function romanize(params) {
  if (params == "I") {
    return 1;
  } else if (params == "V") {
    return 5;
  } else if (params == "X") {
    return 10;
  } else if (params == "L") {
    return 50;
  } else if (params == "C") {
    return 100;
  } else if (params == "D") {
    return 500;
  } else {
    return 1000;
  }
}
function sumit(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      total += arr[i];
    } else {
      total -= arr[i];
    }
  }
  return total;
}
console.log(romantonum(roman));

//3
function pascal(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        result[i][j] = 1;
      } else {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
  }

  return result;
}
console.log(pascal(5));

//4
const stock = [7, 1, 5, 3, 6, 4];
function profit(arr) {
  const ori = [...arr];
  const newarr = arr.sort((a, b) => a - b);
  let small = 0;
  let big = 0;
  let profit = 0;
  for (let i = 0; i < newarr.length; i++) {
    small = newarr[i];
    let n = 0;
    for (let j = 0; j < newarr.length; j++) {
      big = newarr[newarr.length - j - 1];
      if (ori.indexOf(small) < ori.indexOf(big, n) && big > small) {
        return (profit = big - small);
      } else {
        n++;
      }
    }
  }
  return profit;
}
console.log(profit(stock));

function fun1(x, hobby = "Gaming") {
  x["hobbies"] = hobby;
}
function fun2(x, fruit) {
  x.shift(fruit);
}

function fun3(x, num) {
  x = num;
  return x;
}
const person = {
  name: "Carlos",
  age: "24",
  hobbies: ["Movies", "Music", "Drawing"],
};

const fruits = ["Apple", "Banana", "Kiwi", "Olive"];
let luckyNumber = 13;

fun1(person);
fun2(fruits, "Peach");
fun3(luckyNumber, 20);

console.log(person);
console.log(fruits);
console.log(luckyNumber);
