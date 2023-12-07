class Product {
  constructor(x, y) {
    this.Name = x;
    this.Price = y;
  }
}
class Sepatu extends Product {
  constructor(x, y, a, b, c, d) {
    super(x, y);
    this.Category = a;
    this.Size = b;
    this.Color = c;
    this.Brand = d;
  }
}
class Komputer extends Product {
  constructor(x, y, a, b, c, d, e) {
    super(x, y);
    this.Category = a;
    this.Brand = b;
    this.Ram = c;
    this.Processor = d;
    this.Storage = e;
  }
}
class Sepeda extends Product {
  constructor(x, y, a, b, c, d) {
    super(x, y);
    this.Category = a;
    this.Brand = b;
    this.Color = c;
    this.Type = d;
  }
}
let pro = {};
let arr = [];
pro = new Sepatu("Lebron VI", 200, "Sepatu", 46, "Black", "Nike");
arr.push(pro);
pro = new Sepatu("KD III", 180, "Sepatu", 43, "Blue", "Nike");
arr.push(pro);
pro = new Sepatu("Dame VIII", 150, "Sepatu", 44, "Red", "Adidas");
arr.push(pro);
pro = new Komputer("MSI Dragon", 1900, "Komputer", "MSI", 16, "Intel i7", 512);
arr.push(pro);
pro = new Komputer(
  "ROG Phoenix",
  2200,
  "Komputer",
  "ASUS",
  16,
  "Intel i7",
  1000
);
arr.push(pro);
pro = new Komputer("Legion V", 1600, "Komputer", "Lenovo", 8, "Intel i5", 512);
pro = new Sepeda(
  "Avant Chester",
  160,
  "Sepeda",
  "United",
  "Red",
  "Sepeda Lipat"
);
arr.push(pro);
pro = new Sepeda("Flash", 150, "Sepeda", "DC Bike", "Red", "BMX");
arr.push(pro);
pro = new Sepeda("Quicksilver", 200, "Sepeda", "Marvel Ride", "Blue", "BMX");
arr.push(pro);

function filter(arr, key, search) {
  const newarr = arr.filter((val) => val[key].includes(search));
  return newarr;
}

function sort(arr, act) {
  let newarr = [];
  if (act === "ascending") {
    newarr = arr.sort((a, b) => a.Price - b.Price);
    return newarr;
  } else if (act === "descending") {
    newarr = arr.sort((a, b) => b.Price - a.Price);
    return newarr;
  } else {
    return "pilih ascending atau descending";
  }
}

class User {
  #arr = [];

  getuser() {
    const newarr = this.#arr.map((val) => {
      return {
        name: val.name,
        email: val.email,
      };
    });
    return newarr;
  }
  registeruser(name, email, password) {
    const cekemail = this.#arr.filter((val) => val.email == email);
    if (
      (!cekemail.length &&
        email.includes("@") &&
        password !== password.toLowerCase() &&
        password !== password.toUpperCase() &&
        password.includes("@")) ||
      password.includes("!")
    )
      this.#arr.push({ name, email, password });
  }
}
let user = new User();
user.registeruser("angga", "angga@mail.com", "As!d");
user.registeruser("Jodi", "jodi@mail.com", "@12qWqs");
console.log(user.getuser());
