// Number 1

function calculateFuelCost(
  distanceLeg1Km,
  distanceLeg2Miles,
  distanceLeg3Meters,
  efficiencyKmL,
  costPerLiter
) {
  const MILES_TO_KM_FACTOR = 1.60934;
  const METERS_TO_KM_FACTOR = 1000;
  let convLeg2 = MILES_TO_KM_FACTOR * distanceLeg2Miles;
  let convLeg3 = distanceLeg3Meters / METERS_TO_KM_FACTOR;
  let totalDistance = Math.round(distanceLeg1Km + convLeg2 + convLeg3);
  let totalFuel = Math.round(totalDistance / efficiencyKmL);
  let totalCost = totalFuel * costPerLiter;
  // if the totalfuel isn't rounded the answer in total cost would be 2777.072

  console.log(
    `The total distance from manila to baguio is ${totalDistance} km and the liters needed is ${totalFuel} L and the total fuel cost is Php ${totalCost}`
  );
}

calculateFuelCost(250, 75, 150000, 12, 64);

// Number 2
function calculateFencingMeters(lengthMeters, widthFeet) {
  const FEET_TO_METER_FACTOR = 0.3048;

  let convWidth = FEET_TO_METER_FACTOR * widthFeet;
  let totalMeters = 2 * (lengthMeters + convWidth);
  console.log(`The total fencing length is ${totalMeters} meters.`);
}

calculateFencingMeters(15.5, 50);

//number 3
function calculateIndividualShareWithFee(
  billSubtotal,
  tipRate,
  numberOfPeople,
  paymentFee
) {
  let tipAmount = billSubtotal * tipRate;
  let grandTotal = billSubtotal + tipAmount + paymentFee;
  let costPerPerson = grandTotal / numberOfPeople;
  costPerPerson = Math.round(costPerPerson * 100) / 100;
  console.log(
    `The tipamount is ${tipAmount} and the grandTotal is ${grandTotal} and the cost per person equals to ${costPerPerson}`
  );
  return costPerPerson;
}

calculateIndividualShareWithFee(4550.0, 0.18, 7, 10.5);
