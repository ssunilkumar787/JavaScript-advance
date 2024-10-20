const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);
console.log(promise);

// consuming
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return createToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .then(function () {
    console.log("No matter what happens, I will definitely be called");
  });

// producing
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // valodate cart
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // logic for create order
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function createToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    return resolve("Payment Successful.");
  });
}

function validateCart(cart) {
  return false;
}

// 1. createOrder
// 2. proceedToPayment
// 3. showOrderSummary
// 4. updateWallet
