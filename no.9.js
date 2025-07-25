function SFare(TotalFare, riders) {
    const TotalDistance = riders.reduce((sum, rider) => sum + rider.distance, 0);
    const farePerKm= TotalFare/ TotalDistance; 


const FBreakdown= riders.map(rider => {
    const amount = rider.distance * farePerKm; 
    return {
        name: rider.name,
        distance: rider.distance,
        farePerKm: farePerKm.toFixed(2),
        amountOwed: amount.toFixed(2)
    };
});

return FBreakdown; 
}

const TotalFare = 1000;
const riders = [
    {name: "Carlo", distance: 20},
    {name: "Jhon", distance: 40},
    {name: "Francis", distance: 55},
    {name: "Kemuel", distance: 50}

];

const result = SFare(TotalFare, riders);

console.log(`Total Fare: ${TotalFare}`);
console.log(`Fare per km: ${(TotalFare/ riders.reduce((sum, r) => sum + r.distance, 0)).toFixed(2)} \n`);

result.forEach(rider => {
    console.log (`${rider.name}: ${ rider.distance} km * ${rider.farePerKm} = ${rider.amountOwed}`);
});
