class ElectricBillCalculator {
  constructor(kwhUsed) {
    this.kwhUsed = kwhUsed;
  }

  calculate() {
    let bill = 0;
    let remaining = this.kwhUsed;

  
    if (remaining > 0) {
      const tier1 = Math.min(remaining, 100);
      bill += tier1 * 5;
      remaining -= tier1;
    }

  
    if (remaining > 0) {
      const tier2 = Math.min(remaining, 200);
      bill += tier2 * 8;
      remaining -= tier2;
    }

   
    if (remaining > 0) {
      bill += remaining * 10;
    }

    return bill;
  }
}


const input = prompt("Enter total kWh used:");
const kwh = parseFloat(input);

if (isNaN(kwh) || kwh < 0) {
  alert(" Please enter a valid positive number.");
} else {
  const calculator = new ElectricBillCalculator(kwh);
  const total = calculator.calculate();

  alert(` Total kWh used: ${kwh} kWh\n Total Electric Bill: ₱${total.toFixed(2)}`);
}
