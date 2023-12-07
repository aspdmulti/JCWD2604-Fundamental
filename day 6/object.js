const data1 = [1, 2, 3];
const data2 = [4, 5, 6];
const final = [...data1, ...data2];
console.log(final);

const obj1 = { name: "David" };
const obj2 = { email: "gogo@gogo.com" };
const finalo = { ...obj1, ...obj2 };
console.log(finalo);

const person = {
  name: "Jodi",
  lastn: "Gavirin",
  greet() {
    console.log(`Hello ${this.name} ${this.lastn}`);
  },
};
person.greet();

class User {
  greeting() {
    console.log("Hello World");
  }
}
const user = new User();
user.greeting();

class DB {
  static #connection = "";

  static #initialize() {
    const random = Math.ceil(Math.random() * 100);
    DB.#connection = `New DB Connection ${random}`;
  }
  static getconn() {
    if (!DB.#connection) {
      DB.#initialize();
    }

    return DB.#connection;
  }
}

console.log(DB.getconn());
console.log(DB.getconn());

class Product {
  constructor() {
    this.name;
    this.price;
  }
  getname() {
    return this.name;
  }
  getprice() {
    return this.price;
  }
  setname(name) {
    this.name = name;
  }
  setprice(price) {
    this.price = price;
  }
}
class Book extends Product {
  constructor() {
    super();
    this.author;
  }
  getauthor() {
    return this.author;
  }
  setauthor(author) {
    this.author = author;
    console.log(`Author name is ${this.author}`);
  }
}

const book = new Book();
book.setauthor("Jojo");
book.name;

class U {
  name;
  #code = "";

  constructor(codePrefix = "") {
    const randomNum = Math.round(Math.random() * 1000);
    this.#code = `${codePrefix}${randomNum.toString().padStart(6, "0")}`;
  }

  getCode() {
    return this.#code;
  }
  setName(name) {
    this.name = name;
  }
}

class S extends U {
  constructor() {
    super("STD");
  }
}

class E extends U {
  constructor() {
    super("EMP");
  }
}

const student = new S();
student.setName("Jotaro");
console.log(student.name);
console.log(student.getCode());

const employee = new E();
console.log(employee.getCode());



registeruser(name,email,password){
  const cekemail=this.arr.filter((val)=>val.email==email)
  if(!cekemail/length && email.includes("@") && password !== password.toLowerCase() && password !== password.toUpperCase()){
      const user= new this(name,email,password)
      this.arr.push
  }
}