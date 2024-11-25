function getShippingMessage(country, price, deliveryFee) {
  //country — перший параметр, рядок, що містить країну доставки
  //price — другий параметр, число, що містить загальну вартість товару
  //deliveryFee — третій параметр, число, що містить вартість доставки товару

  const totalPrice = price + deliveryFee;

  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
