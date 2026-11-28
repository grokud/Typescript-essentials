function wait(ms = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

function makePizza(toppings = []) {
    return new Promise(function(resolve, reject) {
        // reject if people try with pineapple
        if (toppings.includes('pineapple')) {
            reject('Seriously? Get out 🍍');
        }

        const amountOfTimeToBake = 500 + (toppings.length * 200);
        // wait 1 second for the pizza to cook
        setTimeout(function () {
            // when you are ready, you can resolve this promise
            resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`);
        }, amountOfTimeToBake);
    });
}

async function makeDinner() {
    const pizzaPromise1 = makePizza(['pepperoni']);
    const pizzaPromise2 = makePizza(['mushrooom']);
    const [pep, mush] = await Promise.all([pizzaPromise1, pizzaPromise2]);
    console.log(pep, mush);
}

makeDinner();
