import React from 'react'

const navbar = () => {
  return (
<nav className='flex justify-between bg-violet-900 text-white py-2'>
    <div className="logo">
        <span className='font-bold text-xl mx-8'>iTask</span>
    </div>
    <ul className='flex gap-10 mx-9'>
        <li className='cursor-pointer hover:text-violet-300 transition-all duration-40'>Home</li>
        <li className='cursor-pointer hover:text-violet-300 transition-all duration-40'>Your Task</li>
    </ul>
</nav>
  )
}

export default navbar
