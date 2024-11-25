const message = `Heello! I am testing programm`;
console.log(message);

function makeTransaction(quantity, pricePerDroid) {
  // quantity— перший параметр, число, що містить кількість замовлених дроїдів
  //pricePerDroid — другий параметр, число, що містить вартість одного дроїда
  //<totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

  const totalPrice = quantity * pricePerDroid;

  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
