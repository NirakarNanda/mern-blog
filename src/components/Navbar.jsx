import React, { useState } from 'react'
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" w={40} h={40} alt="logo" />
        <span>nelog.</span>
      </Link>
      {/* Mobile menu */}
      <div className="md:hidden">
        {/* Mobile Button */}
        <div className="cursor-pointer text-4xl " onClick={() => setOpen((prev) => !prev)}>
          {open ? "x" : "=" }
        </div>
        {/* Mobile Link List */}
        <div className="w-full h-screen flex flex-col justify-center items-center absolute top-16 left-0 bg-#e6e6ff z-10 transform transition-transform duration-300 ease-in-out  font-medium text-lg gap-8" style={{transform: open ? "translateX(0)" : "translateX(100%)"}}>
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="/">
          <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login</button>
        </Link>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
        <Link to="/login">
          <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login</button>
        </Link>
        </SignedOut>
      
      <SignedIn>
        <UserButton/>
      </SignedIn>
      </div>
    </div>
  )
}

export default Navbar