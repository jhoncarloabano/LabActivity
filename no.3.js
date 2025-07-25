let passengers = [
    { Name: "Carlo", age: 20 },
    { Name: "Ian", age: 60 },
    { Name: "Jayep", age: 5 }
];

let fare = 100;

function fareDiscount(age) {
    if (age <= 5) {
        
        return { fare: 0 };
    } else if (age >= 6 && age <= 59) {
        let StudentFare = fare * 0.2;
        
        return { fare: StudentFare };
    } else {
        let SeniorFare = fare * 0.5;
        return { fare: SeniorFare };
    }
}

function StartUp(){
    console.log("Passenger Fare List:");
    console.log("------------------------");

    passengers.forEach(p => {
    let result = fareDiscount(p.age);
    console.log(`Name: ${p.Name}, Age: ${p.age}, Fare: P${result.fare.toFixed(2)}`);
});
}

StartUp();
