//1
function fun1(x, hobby = "Gaming") {
  x["hobbies"] = hobby;
}
function fun2(x, fruit) {
  x.shift(fruit);
}

function fun3(x, num) {
  x = num;
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

//2
let array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  if (i === 1) {
    array.splice(i, 1);
  } else {
    array[i] = array[i] + "a";
  }
}
console.log(array);

const tp = new Promise((resolve, reject) => {
  let isError = false;
  if (isError) reject("Error");
  else reject("Success");
});

tp.catch((err) => console.log(err));

const number = 5;
console.log((number += 1));
