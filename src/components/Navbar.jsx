import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'
import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full h-[60px] sm:px-10 px-5 items-center bg-black relative z-50 flex">
      <nav className="flex w-full screen-max-width items-center justify-between">
        {/* Apple Logo */}
        <img src={appleImg} alt="Apple" width={14} height={18} />

        {/* Center Nav Items - Hidden on small screens */}
        <div className="hidden lg:flex flex-1 justify-center gap-8">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="text-sm cursor-pointer text-gray opacity-80
                         hover:opacity-100 hover:text-white
                         transition-colors duration-300"
            >
              {nav}
            </div>
          ))}
        </div>

        {/* Right Icons - Always visible */}
        <div className="flex items-center gap-7">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar