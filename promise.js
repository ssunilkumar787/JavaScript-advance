const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function (summaryInfo) {
      updateWalletBalance(summaryInfo);
    });
  });
});

const promise = createOrder(cart);

promise
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((summaryInfo) => updateWalletBalance(summaryInfo));
