const student = [
  { name: "Jojo", email: "Jojo@gmail.com", age: 45, score: 90 },
  { name: "Dio", email: "Dio@gmail.com", age: 120, score: 85 },
  { name: "Wamu", email: "Wamu@gmail.com", age: 60, score: 65 },
];
class Score {
  constructor() {
    this.Lowest;
    this.Highest;
    this.Avg;
  }
  getLowest() {
    return this.Lowest;
  }
  getHighest() {
    return this.Highest;
  }
  getAvg() {
    return this.Avg;
  }
  setLowest(x) {
    this.Lowest = x;
  }
  setHighest(x) {
    this.Highest = x;
  }
  setAvg(x) {
    this.Avg = x;
  }
}
class Age {
  constructor() {
    this.Lowest;
    this.Highest;
    this.Avg;
  }
  getLowest() {
    return this.Lowest;
  }
  getHighest() {
    return this.Highest;
  }
  getAvg() {
    return this.Avg;
  }
  setLowest(x) {
    this.Lowest = x;
  }
  setHighest(x) {
    this.Highest = x;
  }
  setAvg(x) {
    this.Avg = x;
  }
}
const age = new Age();
const score = new Score();
function sort(arr0) {
  const arr = arr0.sort((a, b) => a.age - b.age);
  const avg = arr.map((val) => val.age).reduce((a, b) => a + b) / arr0.length;
  const newarr = arr.map((val) => val.name);
  age.setHighest(newarr[newarr.length - 1]);
  age.setLowest(newarr[0]);
  age.setAvg(avg);
  const arr1 = arr0.sort((a, b) => a.score - b.score);
  const avgs =
    arr1.map((val) => val.score).reduce((a, b) => a + b) / arr0.length;
  const newarr1 = arr1.map((val) => val.name);
  score.setHighest(newarr1[newarr1.length - 1]);
  score.setLowest(newarr1[0]);
  score.setAvg(avgs);
}
sort(student);
console.log(age);
console.log(score);
