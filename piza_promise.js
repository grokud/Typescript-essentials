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

console.log("First");
makePizza(['pepperoni'])
    .then(function(pizza) {
        console.log(pizza);
        return makePizza(['ham', 'cheese', 'pepperoni']);
    })
    .then(function(pizza) {
        console.log(pizza);
        return makePizza(['onion', 'hot peppers']);
    })
    .then(function(pizza) {
        console.log(pizza);
        return makePizza(['hot peppers', 'onion', 'feta', 'cheese']);
    })
    .then(function(pizza) {
        console.log(pizza);
        return makePizza();
    }).then(function([]) {
        console.log(pizza);
        return makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);
    }).then(pizza => {
        console.log('All done! here is your last pizza');
        consoloe.log(pizza);
    });
console.log("Right after");
