const myMap = new Map();

myMap.set("David", "001");
myMap.set("Bucky", "002");

for (let [key, value] of myMap) {
  console.log(`${key}=${value}`);
}
