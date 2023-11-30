class Product {
  constructor(x, y) {
    this.Name = x;
    this.Price = y;
  }
  getproduct() {
    return this;
  }
  setproduct(x, y) {
    this.Name = x;
    this.Price = y;
  }
}
class Transaction {
  #cart = [];
  #total = 0;
  #final = [];
  #sold = [];

  setcart(product, qty) {
    if (product instanceof Product) {
      this.#total += qty * product.Price;
      const test = this.#cart.filter((str) => str.Name == product.Name);
      if (!test.length) {
        const belanjaan = Object.assign(product, { quantity: qty });
        this.#cart.push(belanjaan);
      } else {
        const index = this.#cart.indexOf(product);
        this.#cart[index].quantity += qty;
      }
    }
  }
  setfinal() {
    this.#sold = this.#sold.concat(this.#cart);
    this.#final = this.#cart;
    this.#cart = [];
  }
  getcart() {
    return this.#cart;
  }
  gettotal() {
    return this.#total;
  }
  getfinal() {
    return this.#final;
  }
  getsold() {
    return this.#sold;
  }
}
const products = [];
let pro;
pro = new Product("Aqua", 5000);
products.push(pro);
pro = new Product("Fruit Tea", 10000);
products.push(pro);
pro = new Product("Teh Botol", 7000);
products.push(pro);

let x;
let y;
const transaction = new Transaction();
x = 1;
y = 1;
transaction.setcart(products[x - 1], y);
console.log(transaction.getcart());
x = 2;
y = 1;
transaction.setcart(products[x - 1], y);
console.log(transaction.getcart());
x = 2;
y = 1;
transaction.setcart(products[x - 1], y);
console.log(transaction.getcart());
x = 2;
y = 2;
transaction.setcart(products[x - 1], y);
console.log(transaction.getcart());
console.log(transaction.gettotal());
transaction.setfinal();
console.log(transaction.getcart());
console.log(transaction.getfinal());
console.log(transaction.getsold());
x = 3;
y = 2;
transaction.setcart(products[x - 1], y);
console.log(transaction.getcart());
console.log(transaction.gettotal());
transaction.setfinal();
console.log(transaction.getcart());
console.log(transaction.getfinal());
console.log(transaction.getsold());
