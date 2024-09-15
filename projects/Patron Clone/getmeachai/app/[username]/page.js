import React from 'react'

const Username = ({params}) => {
  return (
    <>
   
    <div className='cover w-full bg-red relative'>
        <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/16.gif?token-time=1728000000&token-hash=wSuXa5NkmV6E2Cud5d-IPAIyw5tlVp_71iHLQXFQfX0%3D" alt="" />
      
    </div>
    <div className='absolute top-[55%] right-[46%] border-white border-2 rounded-full'>
        <img width={100} height={100} className='rounded-full' src="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg" alt="" />
    </div>
    <div className='info my-12 flex justify-center items-center flex-col gap-2'>
    <div className='font-bold text-lg '>
    @{params.username}
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
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800'placeholder='Enter Name' />
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800'placeholder='Enter Message' />
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800'placeholder='Enter Amount' />
        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg  px-5 py-2.5">Pay</button>
        </div>
        <div className='flex gap-2 mt-5'>
            <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
            <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
            <button className='bg-slate-800 p-3 rounded-lg'>Pay $30</button>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Username
