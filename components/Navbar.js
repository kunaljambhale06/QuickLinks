import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-18 bg-orange-300 flex px-4 justify-between items-center text-white '>
        <div className='logo font-bold text-lg'>
            QuickLink
        </div>
        <ul className='flex justify-center gap-5 items-center'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Me</li></Link>
            <li className='flex gap-5'>
                <Link href="/shorten"><button className='bg-orange-400 shadow-lg p-3 py-0.5 rounded-lg font-bold'>Try Now</button></Link>
                <Link href="/github"><button className='bg-orange-400 shadow-lg p-3 py-0.5 rounded-lg font-bold'>GitHub</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar