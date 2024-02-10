const { get } = require("http");

// Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["sausage", "pepperoni", "chicken", "beef"];
// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greet() {
  let hi = "Welcome to Pizza House, our toppings are:";
  for (let toppings of pizzaToppings) {
    hi += `${toppings}, `;
  }
  console.log(hi);
}
greet();
// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with`;
  for (let items of toppings) {
    order += `${items},`;
  }
  console.log(order);
  return [size, crust, toppings];
}
// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza([size, crust, toppings]) {
  console.log("...Cooking pizza...");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
function servePizza(pizzaObject) {
  let orderUp = `Order up! Here's your ${pizzaObject.size} ${pizzaObject.crust} crust pizza with`;
  for (let yes of pizzaObject.toppings) {
    orderUp += `${yes},`;
  }
  console.log(orderUp);
  return pizzaObject;
}
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
let customerOrder = getPizzaOrder(
  "large",
  "thick",
  "pepperoni",
  "chicken",
  "sausage"
);
let cook = preparePizza(customerOrder);
servePizza(cook);
