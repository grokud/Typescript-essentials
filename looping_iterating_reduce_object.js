const inventory = [
  { type: 'shirt', price: 4000 },
  { type: 'pants', price: 4532 },
  { type: 'socks', price: 234 },
  { type: 'shirt', price: 2343 },
  { type: 'pants', price: 2343 },
  { type: 'socks', price: 542 },
  { type: 'pants', price: 123 },
];

function inventoryReducer(totals, item) {
    console.log(`Looping over ${item.type}`);
    totals[item.type] = totals[item.type] + 1 || 1;
    return totals;
}

const inventoryCounts = inventory.reduce(inventoryReducer, {});
console.log(inventoryCounts);

const totalInventoryPrice = inventory.reduce((acc, item) => acc + item.price, 0);

console.log(totalInventoryPrice);
