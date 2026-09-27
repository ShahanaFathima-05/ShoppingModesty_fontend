import React, { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Collections",
      path: "/collections",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f8f6ee]/95 backdrop-blur-md border-b border-[#4a5338]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="h-24 flex items-center justify-between">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setDropDown(!dropDown)}
            className="lg:hidden text-xl text-[#25291f]"
            aria-label="Toggle menu"
          >
            {dropDown ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <div className="text-center">
              <h1 className="font-serif text-2xl md:text-3xl tracking-[0.18em] text-[#25291f]">
                SHA.MODESTY
              </h1>

              <p className="hidden sm:block text-[8px] uppercase tracking-[0.35em] text-[#7d895d] mt-1">
                Modest Fashion
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 ml-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-[10px] uppercase tracking-[0.2em] text-[#4a5338] hover:text-[#7d895d] transition-colors duration-300 group"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#7d895d] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4 ml-auto">

            {/* Search */}
            <button
              className="hidden sm:flex text-xl text-[#25291f] hover:text-[#7d895d] transition-colors duration-300"
              aria-label="Search"
            >
              <FiSearch />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative text-xl text-[#25291f] hover:text-[#7d895d] transition-colors duration-300"
              aria-label="Wishlist"
            >
              <FiHeart />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-xl text-[#25291f] hover:text-[#7d895d] transition-colors duration-300"
              aria-label="Shopping Bag"
            >
              <FiShoppingBag />

              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#a3ad82] text-[9px] flex items-center justify-center text-[#25291f]">
                0
              </span>
            </Link>

          </div>
        </div>

        {/* Mobile Navigation */}
        {dropDown && (
          <div className="lg:hidden border-t border-[#4a5338]/10 py-6">

            <nav className="flex flex-col gap-5">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setDropDown(false)}
                  className="text-xs uppercase tracking-[0.2em] text-[#4a5338] hover:text-[#7d895d] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/wishlist"
                onClick={() => setDropDown(false)}
                className="text-xs uppercase tracking-[0.2em] text-[#4a5338] hover:text-[#7d895d] transition-colors duration-300"
              >
                Wishlist
              </Link>

              <Link
                to="/cart"
                onClick={() => setDropDown(false)}
                className="text-xs uppercase tracking-[0.2em] text-[#4a5338] hover:text-[#7d895d] transition-colors duration-300"
              >
                Shopping Bag
              </Link>

            </nav>
          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;