class Ride {
  constructor(fare, distance, time) {
    this.fare = fare;
    this.distance = distance; 
    this.time = new Date(time); 
  }

  getHour() {
    return this.time.getHours(); 
  }
}

class TaxiFareTracker {
  constructor() {
    this.rides = [];
  }

  addRide(ride) {
    this.rides.push(ride);
  }

  getTotalEarnings() {
    return this.rides.reduce((total, ride) => total + ride.fare, 0);
  }

  getLongestRide() {
    if (this.rides.length === 0) return null;
    return this.rides.reduce((longest, ride) => 
      ride.distance > longest.distance ? ride : longest
    );
  }

  getPeakHour() {
    const hourCount = {};

    this.rides.forEach(ride => {
      const hour = ride.getHour();
      hourCount[hour] = (hourCount[hour] || 0) + 1;
    });

    let peakHour = null;
    let maxCount = 0;

    for (let hour in hourCount) {
      if (hourCount[hour] > maxCount) {
        maxCount = hourCount[hour];
        peakHour = hour;
      }
    }

    return { hour: peakHour, count: maxCount };
  }

  printSummary() {
    console.log("Taxi Fare Summary:");
    console.log("Total Rides:", this.rides.length);
    console.log("Total Earnings: ₱" + this.getTotalEarnings().toFixed(2));

    const longest = this.getLongestRide();
    if (longest) {
      console.log(`Longest Ride: ${longest.distance} km, Fare: ₱${longest.fare}, Time: ${longest.time}`);
    }

    const peak = this.getPeakHour();
    console.log(`Peak Hour: ${peak.hour}:00 with ${peak.count} ride(s)`);
  }
}


const tracker = new TaxiFareTracker();


tracker.addRide(new Ride(120, 10.5, '2025-07-25T08:15:00'));
tracker.addRide(new Ride(85, 5.2, '2025-07-25T08:45:00'));
tracker.addRide(new Ride(150, 12.3, '2025-07-25T14:20:00'));
tracker.addRide(new Ride(75, 4.0, '2025-07-25T08:05:00'));
tracker.addRide(new Ride(200, 15.0, '2025-07-25T18:00:00'));

tracker.printSummary();
