'use server'

import Razorpay from 'razorpay'
import Payment from '../models/Payment'
import connectDB from '../db/connectDB'
import User from '../models/User'

export const initiate = async (amount, to_username, paymentform) => {
    try {
      await connectDB()
  
      let user = await User.findOne({ username: to_username })
  
      // Initialize Razorpay Instance 
      var instance = new Razorpay({ key_id:'rzp_test_JPawmd4DZVw5T4', key_secret: 'DXyQREmssHCo7EV65ZlE0OSe'})
      let options = {
        amount: Number.parseInt(amount),
        currency: "INR"
      }
      // console.log("options",options)
  
      // Creating Order
      let order = await instance.orders.create(options)
      // console.log("order",order)
  
      // create a payment object which shows a pending payment in the database
      await Payment.create({
        oid: order.id,
        amount: amount / 100,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message
      })
      // console.log("Payment",payment)
  
      return (order)
    } catch (error) {
      console.error('Error initiating payment:', error);
      throw new Error('Payment initiation failed');
    }
  }