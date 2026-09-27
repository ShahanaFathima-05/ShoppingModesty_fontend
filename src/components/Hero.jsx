import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-[#f8f6ee]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xs uppercase text-[#7d895d] mb-6"
            >
              The New Collection
            </motion.p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-[#25291f]">
              Elegance
              <br />
              <span className="italic text-[#7d895d]">
                in modesty.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-7 max-w-md text-sm md:text-base leading-7 text-[#6d7656]"
            >
              Thoughtfully designed modest wear that celebrates
              simplicity, confidence and timeless elegance.
            </motion.p>

            {/* Explore Collection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                to="/shop"
                className="group mt-9 inline-flex items-center gap-4 bg-[#4a5338] text-[#f8f6ee] px-7 py-4 text-xs uppercase tracking-[0.2em]"
              >
                Explore Collection

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <FiArrowUpRight size={18} />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[55vh] min-h-[480px] max-h-[720px] overflow-hidden">

              <motion.img
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.8,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.04 }}
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85"
                alt="OLIVÉA modest fashion"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-[#4a5338]/10 pointer-events-none"></div>
            </div>

            {/* Floating Label */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
              }}
              className="absolute bottom-6 -left-5 md:-left-8 bg-[#f8f6ee] px-6 py-5 shadow-sm"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#7d895d]">
                SHA.MODESTY
              </p>

              <p className="font-serif text-lg text-[#25291f] mt-1">
                Timeless pieces
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.8,
          duration: 1,
        }}
        className="hidden lg:flex absolute bottom-8 left-10 items-center gap-4"
      >
        <span className="w-10 h-[1px] bg-[#a3ad82]"></span>

        <span className="text-[9px] uppercase tracking-[0.3em] text-[#7d895d]">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}

export default Hero;