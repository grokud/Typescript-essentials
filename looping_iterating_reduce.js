const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];


function tallyNumber(tally, currentTotal) {
    console.log(`The current tally is ${tally}`);
    console.log(`The current total is ${currentTotal}`);
    console.log("---------------------------");
    return tally + currentTotal;
}

const allOrders = orderTotals.reduce(tallyNumber, 0);

console.log(allOrders);
