import { Heart, Menu, X, ShoppingCart, User, Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  return (
    <nav className="bg-white p-5 shadow">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="font-bold text-4xl">
          StyleNest
        </Link>
        {/* DesktopNavigation */}
        <div className="hidden items-center lg:flex gap-5">
          <Link to={'/'} className="transition-colors duration-300 hover:text-red-600">
            Home
          </Link>
          <Link to={'/shop'} className="hover:text-gray-500">Shop</Link>
          <Link className="hover:text-gray-500">Categories</Link>
          <Link className="hover:text-gray-500">Contact</Link>
        </div>
        <div className="hidden lg:block relative w-full max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 outline-none focus:border-black"
          />
        </div>
        {/* Icons */}
        <div className="hidden lg:flex gap-5">
          <Link>
            <User size={20} />
          </Link>
          <Link>
            <Heart size={20} />
          </Link>
          <Link>
            <ShoppingCart size={20} />
          </Link>
        </div>

        {/* Hambuger */}
        <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className="lg:hidden cursor-pointer">
          {isMenuOpen ?<X size={30} />: <Menu size={30} /> }
        </button>

        
      </div>
      {isMenuOpen && 
        <div className="mt-5 lg:hidden">
          {/* Mobile Navigation */}
          <div className="flex flex-col gap-5">
            <Link to={'/'} onClick={()=>setIsMenuOpen(false)}>Home</Link>
            <Link to={'/shop'} onClick={()=>setIsMenuOpen(false)}>Shop</Link>
            <Link to={'/categories'} onClick={()=>setIsMenuOpen(false)}>Categories</Link>
            <Link to={'/contact'} onClick={()=>setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
        }
    </nav>
  );
};

export default Navbar;
