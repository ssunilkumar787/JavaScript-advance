const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance()
        })
    })
})





const promise = createOrder(cart);

promise
.then(function (orderId) {
 return  proceedToPayment(orderId)
})
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(summaryInfo => updateWalletBalance(summaryInfo))



