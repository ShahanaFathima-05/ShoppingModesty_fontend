import React from "react";
import {
  FiInstagram,
  FiFacebook,
  
  FiArrowUp,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#25291f] text-[#f8f6ee]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/">
              <h2 className="font-serif text-4xl md:text-5xl tracking-[0.12em]">
                SHA.MODESTY
              </h2>
            </Link>

            <p className="text-[9px] uppercase tracking-[0.35em] text-[#a3ad82] mt-3">
              Modest Fashion
            </p>

            <p className="max-w-md mt-7 text-sm leading-7 text-[#c9cbbf]">
              Thoughtfully designed modest wear for women who believe
              elegance is found in simplicity.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-5 mt-8">

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#c5ccab]/20 flex items-center justify-center text-[#c5ccab] hover:bg-[#a3ad82] hover:text-[#25291f] transition-all duration-300"
              >
                <FiInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#c5ccab]/20 flex items-center justify-center text-[#c5ccab] hover:bg-[#a3ad82] hover:text-[#25291f] transition-all duration-300"
              >
                <FiFacebook size={16} />
              </a>

              <a
                href="#"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full border border-[#c5ccab]/20 flex items-center justify-center text-[#c5ccab] hover:bg-[#a3ad82] hover:text-[#25291f] transition-all duration-300"
              >
                
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#a3ad82] mb-6">
              Explore
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                className="text-sm text-[#c9cbbf] hover:text-[#f8f6ee] transition-colors duration-300"
              >
                Home
              </Link>

              <Link
                to="/shop"
                className="text-sm text-[#c9cbbf] hover:text-[#f8f6ee] transition-colors duration-300"
              >
                Shop
              </Link>

              <Link
                to="/about"
                className="text-sm text-[#c9cbbf] hover:text-[#f8f6ee] transition-colors duration-300"
              >
                About Us
              </Link>

              <Link
                to="/wishlist"
                className="text-sm text-[#c9cbbf] hover:text-[#f8f6ee] transition-colors duration-300"
              >
                Wishlist
              </Link>

            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#a3ad82] mb-6">
              Customer Care
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/cart"
                className="text-sm text-[#c9cbbf] hover:text-[#f8f6ee] transition-colors duration-300"
              >
                Shopping Bag
              </Link>

              <Link
                to="/shop"
                className="text-sm text-[#c9cbbf] hover:text-[#f8f6ee] transition-colors duration-300"
              >
                Shipping & Returns
              </Link>

              <Link
                to="/shop"
                className="text-sm text-[#c9cbbf] hover:text-[#f8f6ee] transition-colors duration-300"
              >
                Size Guide
              </Link>

              <a
                href="mailto:hello@olivea.com"
                className="text-sm text-[#c9cbbf] hover:text-[#f8f6ee] transition-colors duration-300"
              >
                Contact Us
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#c5ccab]/15">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-[10px] uppercase tracking-[0.18em] text-[#aeb1a5]">
              © 2026 SHA.MODESTY. All rights reserved.
            </p>

            <p className="text-[10px] uppercase tracking-[0.18em] text-[#aeb1a5]">
              Modesty, beautifully yours.
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#c5ccab] hover:text-[#f8f6ee] transition-colors duration-300"
            >
              Back to top

              <span className="w-8 h-8 rounded-full border border-[#c5ccab]/30 flex items-center justify-center group-hover:bg-[#a3ad82] group-hover:text-[#25291f] transition-all duration-300">
                <FiArrowUp
                  size={14}
                  className="group-hover:-translate-y-1 transition-transform duration-300"
                />
              </span>
            </button>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;