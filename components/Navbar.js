"use client";
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-orange-300 text-black'>
      <div className='flex px-4 h-16 justify-between items-center'>
        
        <div className='logo font-bold text-lg'>
          QuickLink
        </div>

        <button 
          className='md:hidden text-2xl'
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className='hidden md:flex justify-center gap-5 items-center'>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li></li></Link>
          <Link href="/shorten"><li>Shorten</li></Link>
          <Link href="/contact"><li>Contact Me</li></Link>

          <li className='flex gap-5'>
            <Link href="/shorten">
              <button className='bg-orange-400 shadow-lg px-3 py-1 rounded-lg font-bold cursor-pointer'>
                Try Now
              </button>
            </Link>

            <Link href="https://github.com/kunaljambhale06/QuickLinks" target='_blank'>
              <button className='bg-orange-400 shadow-lg px-3 py-1 rounded-lg font-bold cursor-pointer'>
                GitHub
              </button>
            </Link>
          </li>
        </ul>
      </div>


      {isOpen && (
        <ul className='md:hidden flex flex-col px-4 pb-4 gap-3'>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li></li></Link>
          <Link href="/shorten"><li>Shorten</li></Link>
          <Link href="/contact"><li>Contact Me</li></Link>

          <li className='flex gap-3'>
            <Link href="/shorten">
              <button className='bg-orange-400 shadow-lg px-3 py-1 rounded-lg font-bold cursor-pointer'>
                Try Now
              </button>
            </Link>

            <Link href="https://github.com/kunaljambhale06/QuickLinks" target='_blank'>
              <button className='bg-orange-400 shadow-lg px-3 py-1 rounded-lg font-bold cursor-pointer'>
                GitHub
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
