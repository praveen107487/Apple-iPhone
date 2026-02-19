import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className="w-full h-[50px] sm:h-[60px] flex items-center px-3 sm:px-5">
      <nav className="flex w-full screen-max-width items-center justify-between">
        {/* Apple Logo */}
        <img 
          src={appleImg} 
          alt="Apple" 
          width={14} 
          height={18}
          className="w-3 sm:w-3.5 h-auto" 
        />

        {/* Center Nav Items */}
        <div className="hidden md:flex flex-1 justify-center gap-4 lg:gap-8">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="text-xs sm:text-sm lg:text-base cursor-pointer text-gray opacity-80
                         hover:opacity-100 hover:text-white
                         transition-colors duration-300"
            >
              {nav}
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-7 ml-auto">
          <img 
            src={searchImg} 
            alt="search" 
            width={18} 
            height={18}
            className="w-4 sm:w-5 h-auto cursor-pointer"
          />
          <img 
            src={bagImg} 
            alt="bag" 
            width={18} 
            height={18}
            className="w-4 sm:w-5 h-auto cursor-pointer"
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
