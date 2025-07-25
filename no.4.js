let paymentRecords = [];

function AddPayment(Type, Amount, Timestamp){
    let record = {
        Type: Type,
        Amount: Amount,
        Timestamp: Timestamp
    };
    paymentRecords.push(record);

}

paymentRecords.sort((a, b) => b.Amount - a.Amount);


function PaymentHistory(){
    paymentRecords.forEach(record => {
    console.log("\nType of Payment: "+ record.Type + "\nAmount: " + record.Amount.toFixed(2) + "\nTimestamp: " + record.Timestamp);
});
}

AddPayment("Credit Card", 150.75, "2025-07-25T14:00:00Z");
AddPayment("Cash", 80.00, "2025-07-25T15:30:00Z");
AddPayment("GCash", 200.00, "2025-07-25T16:10:00Z");


console.log("Payment History")
console.log("------------------------")

PaymentHistory();
