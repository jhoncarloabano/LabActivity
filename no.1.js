function Account(Name, Balance = 0){
  return{
    Name: Name,
    Balance: Balance,
    Withdrawn: 0,
    DailyLimit: 10000
  };
}


function Deposit(account, amount){
   account.Balance += amount;
   console.log(account.Name + " Deposit: ₱" + amount.toFixed(2)+ "\nYour new Balance is: ₱"+ account.Balance.toFixed(2) + "\n");
   return;
}

function Withdraw(account, amount){
  
   if(account.Withdrawn + amount > account.DailyLimit){
     console.log("Sorry, Daily Withdrawal exceeded\n You can only withdraw exact amount of ₱" + account.DailyLimit.toFixed(2) + "\n");
     return;
   }else if(amount > account.Balance){
     console.log("You don't have enough Balance\n Your current Balance is: ₱" + account.Balance.toFixed(2) + "\n");
     return;
   }else{
     account.Balance -= amount;
     account.Withdrawn += amount;
     console.log(account.Name + " Just Successfully Withdrawn amount ₱"+ amount.toFixed(2) + "\nYour remaining balance is: ₱"+account.Balance.toFixed(2) + "\n");
     return;
   }
}

let Carlo = Account("Carlo", 0);
let Ochoa = Account("Ochoa", 0);


Deposit(Carlo, 5000);
Withdraw(Carlo, 3500);

Deposit(Ochoa, 10000);
Withdraw(Ochoa, 5000);
