import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className="w-full h-[60px] sm:px-10 px-5 flex items-center">
      <nav className="flex w-full screen-max-width items-center">
        {/* Apple Logo */}
        <img src={appleImg} alt="Apple" width={14} height={18} />

        {/* Center Nav Items */}
        <div className="flex flex-1 justify-center gap-8 max-sm:hidden">
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

        {/* Right Icons */}
        <div className="flex items-center gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
