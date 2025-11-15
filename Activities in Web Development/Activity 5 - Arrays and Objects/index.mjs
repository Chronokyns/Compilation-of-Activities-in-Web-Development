//1
function calculateFinalItemPrices(originalPrices, discountRate, shippingFee) {
  let finalPrices = [];
  for (let price of originalPrices) {
    let discountedPrice = price * (1 - discountRate);
    let finalPrice = discountedPrice + shippingFee;

    finalPrice = Math.round(finalPrice * 100) / 100;

    finalPrices.push(finalPrice);
  }
  return finalPrices;
}
const originalPrices = [35000, 12500, 3500, 1800];
const discountRate = 0.12;
const shippingFee = 350;
const result = calculateFinalItemPrices(
  originalPrices,
  discountRate,
  shippingFee
);
console.log(result);

//2
