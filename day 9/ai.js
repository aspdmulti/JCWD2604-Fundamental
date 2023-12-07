// Initialize Restaurant Menu
const restaurantMenu = {
  kangkung: 100,
  ayam_mayo: 100,
  fuyunghai: 100,
};

// Initialize Order List
const orderList = [];

// Add new order
function addOrder(order) {
  orderList.push(order);
  updateStock(order);
}

// Update stock
function updateStock(order) {
  for (let item in order.menu) {
    restaurantMenu[item] -= order.menu[item];
  }
}

// Get remaining stock
function getRemainingStock() {
  return restaurantMenu;
}

// Add stock
function addStock(item, quantity) {
  restaurantMenu[item] += quantity;
}

// Get most expensive customer
function getMostExpensiveCustomer() {
  let maxExpense = 0;
  let maxCustomer = null;

  for (let order of orderList) {
    if (order.totalPrice > maxExpense) {
      maxExpense = order.totalPrice;
      maxCustomer = order.customerName;
    }
  }

  return maxCustomer;
}

// Add customer order
function addCustomerOrder(customerName, totalPrice, orderMenu, orderDate) {
  let customerOrder = {
    customerName: customerName,
    totalPrice: totalPrice,
    menu: orderMenu,
    orderDate: orderDate,
  };

  addOrder(customerOrder);
}

// Get orders by date
function getOrdersByDate(date) {
  return orderList.filter((order) => order.orderDate === date);
}

// Add customer
function addCustomer(customerName, totalSpent) {
  let customer = {
    customerName: customerName,
    totalSpent: totalSpent,
  };

  return customer;
}

// Update customer total spent
function updateCustomerTotalSpent(customer, price) {
  customer.totalSpent += price;
}

// Example usage
let customer1 = addCustomer("Alice", 10000);
let customer2 = addCustomer("Bob", 15000);

addCustomerOrder(customer1.customerName, 1000, { kangkung: 2 }, "2022-03-01");
addCustomerOrder(customer1.customerName, 2000, { ayam_mayo: 4 }, "2022-03-02");
addCustomerOrder(customer2.customerName, 3000, { fuyunghai: 6 }, "2022-03-01");

console.log(getRemainingStock());
console.log(getMostExpensiveCustomer());
console.log(getOrdersByDate("2022-03-01"));

updateCustomerTotalSpent(customer1, 3000);
console.log(customer1);
