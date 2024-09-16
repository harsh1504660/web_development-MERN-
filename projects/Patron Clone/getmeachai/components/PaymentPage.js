"use client"
import Razorpay from 'razorpay'
import React , {useState} from 'react'
import Script from 'next/script'

import { initiate } from '@/app/actions/useractions'
import { useSession } from 'next-auth/react'
const PaymentPage = ({username}) => {
    const {data:session}=useSession()
    const [paymentform, setpaymentform] = useState({ })
  const handelchange = (e) =>{
    setpaymentform({...paymentform,[e.target.name]:e.target.value})
  }
  
  const pay = async (amount) => {
  try {
    const response = await initiate(amount, username, paymentform)
    // console.log("response here",response)
    const orderId = response.id;
    // console.log("orderId",orderId)

    const options = {
        key: 'rzp_test_JPawmd4DZVw5T4',
        amount: amount,
        currency: "INR",
        name: "Get-Me-A-Chai",
        description: "Test Transaction",
        image: `${process.env.NEXT_PUBLIC_URL}/icons/tea.gif`,
        order_id: orderId,
        handler: async function (response) {
            const paymentResponse = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/razorpay`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature
                })
            });
            const result = await paymentResponse.json();
            // console.log("result",result)
      
        },
        prefill: {
            name: paymentform.name,
            email: paymentform.email || "customer@example.com",
            contact: paymentform.contact || "9999999999"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#5DADE2"
        }
    };

    const rzp1 = new Razorpay(options);
    console.log(rzp1)
    rzp1.open();

} catch (error) {
    console.error("Payment initiation failed:", error);
}

}

    return (
   <>
   <Script src="https://checkout.razorpay.com/v1/checkout.js" />
  <div className='cover w-full bg-red relative'>
        <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/16.gif?token-time=1728000000&token-hash=wSuXa5NkmV6E2Cud5d-IPAIyw5tlVp_71iHLQXFQfX0%3D" alt="" />
      
    </div>
    <div className='absolute top-[55%] right-[46%] border-white border-2 rounded-full'>
        <img width={100} height={100} className='rounded-full' src="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg" alt="" />
    </div>
    <div className='info my-12 flex justify-center items-center flex-col gap-2'>
    <div className='font-bold text-lg '>
    @{username}
    </div>
    <div className='text-slate-500'>
    Creating Animated art for VTT's


    </div>
    <div className='text-slate-500'>
    13,765 members89 posts$17,530/release
    </div>
    <div className="payment flex gap-3 w-[80%]">
        <div className="supporters w-1/2 bg-slate-900 text-white rounded-lg p-5">
    <h2 className='font-bold text-lg text-center my-3'>Supporters</h2>
    <ul>
        <li className='my-2 flex gap-2 items-center'>
            <img width={30} className='rounded-full' src="images\avatar1.gif" alt="" />
            Shubham donated $30 with a message "Lots of love"</li>
            <li className='my-2 flex gap-2 items-center'>
            <img width={30} className='rounded-full' src="images\avatar1.gif" alt="" />
            Shubham donated $30 with a message "Lots of love"</li>
            <li className='my-2 flex gap-2 items-center'>
            <img width={30} className='rounded-full' src="images\avatar1.gif" alt="" />
            Shubham donated $30 with a message "Lots of love"</li>
            <li className='my-2 flex gap-2 items-center'>
            <img width={30} className='rounded-full' src="images\avatar1.gif" alt="" />
            Shubham donated $30 with a message "Lots of love"</li>
            <li className='my-2 flex gap-2 items-center'>
            <img width={30} className='rounded-full' src="images\avatar1.gif" alt="" />
            Shubham donated $30 with a message "Lots of love"</li>
    </ul>
        </div>
        <div className="makepayment w-1/2 bg-slate-900 text-white rounded-lg p-10">
        <h2 className='font-bold text-lg text-center my-5'>Payment</h2>
        <div className='flex gap-2'>
        <input name='name' onChange={handelchange} value={paymentform.name} type="text" className='w-full p-3 rounded-lg bg-slate-800'placeholder='Enter Name' />
        <input name='message' onChange={handelchange} value={paymentform.message} type="text" className='w-full p-3 rounded-lg bg-slate-800'placeholder='Enter Message' />
        <input name='amount' onChange={handelchange} value={paymentform.amount} type="text" className='w-full p-3 rounded-lg bg-slate-800'placeholder='Enter Amount' />
        <button onClick={() => pay(paymentform.amount * 100 || 0)} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg  px-5 py-2.5">Pay</button>
        </div>
        <div className='flex gap-2 mt-5'>
            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(1000)}>Pay ₹10</button>
            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(2000)}>Pay ₹20</button>
            <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(3000)}>Pay ₹30</button>
        </div>
        </div>
    </div>
    </div>
   </>
  )
}

export default PaymentPage
