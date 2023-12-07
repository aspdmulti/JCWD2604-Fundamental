class Menu {
  #arrmenu = [];
  #arrresep = [];
  #arrorder = [];
  #arrbahan = [];
  getAllMenu() {
    return this.#arrmenu;
  }
  getMenu(name) {
    let index = this.#arrmenu.map((val) => val.name).indexOf(name);
    let menuprice = this.#arrmenu[index].price;
    return [name, menuprice];
  }
  setMenu(x, y) {
    let obj = {};
    obj = { name: x, price: y };
    this.#arrmenu.push(obj);
  }
  getResep(x) {
    let newarr = [];
    newarr = this.#arrresep.filter((val) => val.menuname === x);
    return newarr;
  }
  setResep(x, y, z) {
    let obj = {};
    obj = { menuname: x, ingredname: y, qty: z };
    this.#arrresep.push(obj);
  }
  getStock() {
    return this.#arrbahan;
  }
  setBahan(x, y = 0) {
    let obj = { bahanname: x, stock: y };
    this.#arrbahan.push(obj);
  }
  setStock(x, y) {
    let obj = { bahanname: x, stock: y };
    let index = this.#arrbahan.map((val) => val.bahanname).indexOf(x);
    this.#arrbahan.splice(index, 1, obj);
  }
  orderMenu(name, menu, qty) {}
}
class Customer {
  #arrcustom = [];
  #arrmenu = [];

  getCustom(date) {
    const newarr = this.#arrcustom.filter((val) => val.date === date);
    return newarr;
  }

  setCustom(a, b, c) {
    let tot = 0;
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    let cekcust = this.#arrcustom.filter((val) => val.name === a);
    if (cekcust.length < 1) {
      let orderlist = c + " " + b[0];
      this.#arrmenu.push(orderlist);
      let obj = {
        name: a,
        total: (tot += b[1] * c),
        order: this.#arrmenu,
        date: currentDate,
      };
      this.#arrcustom.push(obj);
    } else {
      let obj = {
        name: "nani",
        total: "nani",
        order: this.#arrmenu,
        date: currentDate,
      };
      this.#arrcustom.push(obj);
    }
  }
}

let menu = new Menu();
menu.setMenu("Cah Kangkung", 20000);
menu.setMenu("Ayam Mayo", 25000);
menu.setMenu("Fuyunghai", 30000);
console.log(menu.getAllMenu());

menu.setResep("Fuyunghai", "Tomat", 2);
menu.setResep("Fuyunghai", "Telur", 1);
menu.setResep("Fuyunghai", "Ayam", 1);
menu.setResep("Cah Kangkung", "Kangkung", 1);
menu.setResep("Ayam Mayo", "Ayam", 1);
menu.setResep("Ayam Mayo", "Mayonaise", 1);
console.log(menu.getResep("Fuyunghai"));

let customer = new Customer();
customer.setCustom("Angga", menu.getMenu("Fuyunghai"), 2);
console.log(customer.getCustom("4-12-2023"));
menu.setBahan("Ayam");
menu.setStock("Ayam", 2);
console.log(menu.getStock());
customer.setCustom("Angga", menu.getMenu("Fuyunghai"), 2);
console.log(customer.getCustom("4-12-2023"));
