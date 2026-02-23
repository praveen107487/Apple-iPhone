import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 px-3 sm:px-6 md:px-8 lg:px-10 flex justify-between items-center">
      <nav className="flex w-full screen-max-width items-center justify-between max-sm:mx-4 max-sm:w-[calc(100%-2rem)]">
        {/* Apple Logo */}
        <div className="flex items-center shrink-0">
          <img src={appleImg} alt="Apple" width={14} height={18} />
        </div>

        {/* Center Nav Items - Hidden on small screens */}
        <div className="flex flex-1 justify-center items-center gap-10 max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img 
            src={searchImg} 
            alt="search" 
            width={18} 
            height={18} 
          />
          <img 
            src={bagImg} 
            alt="bag" 
            width={18} 
            height={18} 
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar