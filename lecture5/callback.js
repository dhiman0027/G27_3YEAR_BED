let products = [
  {
    name: "samsung",
    amount: "70000",
    quantity: 10
  },
  {
    name: "iphone 16",
    amount: "100000",
    quantity: 1
  }
];

let account_balance = 100;
function buyProduct(product_name) {
  return new Promise((resolve, reject) => {
    let isproduct = null;

    for (let i = 0; i < products.length; i++) {
      if (products[i].name.toLowerCase() === product_name.toLowerCase()) {
        isproduct = products[i];
        break;
      }
    }

    if (!isproduct) {
      reject("Product is not available");
    } else {
      resolve(isproduct.amount);
    }
  });
}
function deductAmount(amount) {
  return new Promise((resolve, reject) => {
    amount = parseInt(amount); 
    if (amount > account_balance) {
      reject("Your account balance is low");
    } else {
      account_balance -= amount;
      resolve("Product is purchased");
    }
  });
}

// buyProduct("Iphone 16")
//   .then((amount) => {
//     console.log("Amount to be paid:", amount);
//     return deductAmount(amount);
//   })
//   .then((message) => {
//     console.log(message);
//     console.log("Remaining balance:", account_balance);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });
  async function myfun(){
    try{
    let amount= await buyProduct("motorolla")
  let message= await deductAmount(amount)
  console.log(message)
  }
  catch(error){
    console.log(error)
  }
}