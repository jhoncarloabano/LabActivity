let Products = [{ProductName: "Palmolive Shampoo", Stock: 25, Price: 10.00},
    {ProductName: "Safeguard", Stock: 25, Price: 20.00},
    {ProductName: "Laptop", Stock: 4, Price: 45000.00},
    {ProductName: "HawkBag", Stock: 25, Price: 500.00}
];
let MinimumStock = 5;

function stockAlert() {

    let hasLowStock = false;

    Products.forEach(product => {
        if (product.Stock < MinimumStock) {
            console.log(`\nLow Stock: ${product.ProductName} - Only ${product.Stock} left`);
            hasLowStock = true;
        }
    });

    
}

function Purchase(productname, quatity){
    let product = Products.find(p => p.ProductName === productname);

    if(product.Stock >= quatity){
        let UpdatedStock = product.Stock - quatity;
        let TotalPrice = product.Price * quatity;

        console.log("\nUpdated Stock: " + UpdatedStock);
        console.log("Total Cost: " + TotalPrice.toFixed(2));
    }else if(!product){
        console.log("Product Not Found");
    }else{
        console.log(`Not enough stock for ${product.ProductName}. Only ${product.Stock} left.`);
    }

    
}

function ProductList(){
    Products.forEach(prolist => {
        console.log("\nProduct Name: "+ prolist.ProductName + " Stock: " + prolist.Stock + " Price: " + prolist.Price.toFixed(2));
    });
}

ProductList();

stockAlert();


Purchase("Laptop", 2);
Purchase("Safeguard", 5);
Purchase("HawkBag", 10); 
