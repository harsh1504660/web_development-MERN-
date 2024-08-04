import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-around bg-slate-800 text-white py-4'>
    <div className='text-center'>
    Copyright &c Facebook | All rught reserved
    </div>
    <ul className="flex gap-2 text-sm">
        <a href="/"><li className='text-sm'>Home</li></a>
        <a href="/about"><li className='text-sm'>About</li></a>
        <a href="/contact"><li className='text-sm'>Contact</li></a>

    </ul>
    </footer>
  )
}

export default Footer