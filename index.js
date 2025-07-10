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

let account_balance = 1000000000;

function buyProduct(product_name, cb) {
  let isproduct = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase() === product_name.toLowerCase()) {
      isproduct = products[i];
      break;
    }
  }

  if (!isproduct) {
    cb("product is not available", null);
  } else {
    cb(null, isproduct.amount);
  }
}

function deductAmount(amount, cb) {
  if (amount > account_balance) {
    cb("your account balance is low", null);
  } else {
    account_balance -= amount;
    cb(null, "product is purchased");
  }
}

buyProduct("Iphone 16", function (err, amount) {
  if (err) return console.log(err);
  console.log("Amount to be paid:", amount);

  deductAmount(amount, function (err, message) {
    if (err) return console.log(err);
    console.log(message);
    console.log("Remaining balance:", account_balance);
  });
});
