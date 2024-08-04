import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='flex justify-between px-2 bg-slate-800 text-white py-4'>
        <div className='logo font-bold'>
    Facebook
        </div>
        <ul className='flex gap-6'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>about</li></Link>
            <Link href="/contact"><li>contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar
