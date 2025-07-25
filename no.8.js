const orderItems = [
    { name: "T-shirt", price: 300, quantity: 2 },
    { name: "Shoes", price: 2000, quantity: 1 },
    { name: "Cap", price: 150, quantity: 2 }
  ];
  
  function applyBestDiscount(items) {
    let totalPrice = 0;
    let totalQuantity = 0;
  
    for (let item of items) {
      totalPrice += item.price * item.quantity;
      totalQuantity += item.quantity;
    }
  
    const discountOptions = [];
  
    if (totalPrice > 1000) {
      discountOptions.push({ name: "10% Discount", amount: totalPrice * 0.10 });
    }
  
    if (totalPrice >= 5000) {
      discountOptions.push({ name: "20% Discount", amount: totalPrice * 0.20 });
    }
  
    if (totalQuantity >= 5) {
      discountOptions.push({ name: "₱100 Off (5+ items)", amount: 100 });
    }
  
    let bestDiscount = { name: "No Discount", amount: 0 };
    for (let discount of discountOptions) {
      if (discount.amount > bestDiscount.amount) {
        bestDiscount = discount;
      }
    }
  
    const finalPrice = totalPrice - bestDiscount.amount;
  
    return {
      totalBeforeDiscount: totalPrice,
      discountName: bestDiscount.name,
      discountValue: bestDiscount.amount,
      totalAfterDiscount: finalPrice
    };
  }
  

  const result = applyBestDiscount(orderItems);
  const outputElement  = document.getElementById("output");
  
  outputElement.textContent = `
  Total Before Discount: ₱${result.totalBeforeDiscount.toFixed(2)}
  Discount Applied: ${result.discountName}
  Discount Amount: ₱${result.discountValue.toFixed(2)}
  Final Total: ₱${result.totalAfterDiscount.toFixed(2)}
  `.trim();
  
