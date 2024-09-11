import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
       <div className="logo font-bold text-lg">GetMeAChai</div>
        <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Login</li>
            <li>Sign up</li>
        </ul>
    </nav>
  )
}

export default Navbar
