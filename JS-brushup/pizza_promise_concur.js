function makePizza(toppings = []) {
  return new Promise(function(resolve, reject) {
      const amountOfTimeToBake = 500 + (toppings.length * 200);
    // wait 1 second for the pizza to cook
    setTimeout(function() {
        resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`);
    }, amountOfTimeToBake)

    // if something went wrong, we can reject this promise
  });
}

// Run them concurrently
const pizzaPromise1 = makePizza(['hot peppers', 'onion', 'feta']);
const pizzaPromise2 = makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);
const pizzaPromise3 = makePizza(['ham', 'cheese']);

Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3])
    .then(pizzas => {
        [hottie, garbagePail, hamAndCheese] = pizzas;
        console.log(hottie, garbagePail, hamAndCheese);
    });
