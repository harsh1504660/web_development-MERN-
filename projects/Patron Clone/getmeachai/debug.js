const Razorpay = require("razorpay");

const instance = new Razorpay({
    key_id: "rzp_test_JPawmd4DZVw5T4",  
    key_secret: "DXyQREmssHCo7EV65ZlE0OSe"
});

const options = {
    amount: 1000,  // 1000 paise = ₹10
    currency: "INR",
};

instance.orders.create(options, function (err, order) {
    if (err) {
        console.error("Error creating order:", err);
    } else {
        console.log("Order created:", order);
    }
});