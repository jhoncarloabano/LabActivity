class ParkingFeeCalculator {
  constructor(vehicleType, durationHours, isVIP) {
    this.vehicleType = vehicleType;
    this.durationHours = durationHours;
    this.isVIP = isVIP;
  }

  calculateFee() {
    if (this.durationHours <= 0) {
      return 0;
    }

    let fee = 50; 

    if (this.durationHours > 1) {
      const extraHours = this.durationHours - 1;
      fee += extraHours * 20;
    }

  
    if (this.isVIP) {
      fee *= 0.7; 
    }

    return fee;
  }
}


const vehicleType = prompt("Enter vehicle type (e.g., Car, Motorcycle, SUV):");
const durationInput = prompt("Enter parking duration in hours:");
const isVIPInput = prompt("Is the customer a VIP? (yes/no):");

const duration = parseFloat(durationInput);
const isVIP = isVIPInput.trim().toLowerCase() === "yes";

if (isNaN(duration) || duration <= 0) {
  alert(" Please enter a valid duration in hours.");
} else {
  const calculator = new ParkingFeeCalculator(vehicleType, duration, isVIP);
  const totalFee = calculator.calculateFee();

  alert(` Vehicle Type: ${vehicleType}
   Duration: ${duration} hour(s)
   VIP: ${isVIP ? "Yes" : "No"}
   Parking Fee: ₱${totalFee.toFixed(2)}`);
}
