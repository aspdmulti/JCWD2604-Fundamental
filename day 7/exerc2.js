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

  setcart(product, qty) {
    if (product instanceof Product) {
      this.#total += qty * product.Price;
      const test = this.#cart.filter((str) => str.Name == 1000);
      if (test) {
        const belanjaan = Object.assign(product, { quantitiy: qty });
        this.#cart.push(belanjaan);
      }
    }
  }
  getcart() {
    return this.#cart;
  }
  gettotal() {
    return this.#total;
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
