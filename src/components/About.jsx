import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function About() {
  return (
    <section
      id="about"
      className="bg-[#e9e3d6] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative h-[520px] md:h-[650px] overflow-hidden">

              <motion.img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
                alt="OLIVÉA modest fashion"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8 }}
              />

              <div className="absolute inset-0 bg-[#4a5338]/10 pointer-events-none"></div>

            </div>

            {/* Small Brand Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-[#f8f6ee] px-7 py-6 shadow-sm"
            >
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#7d895d]">
                Since 2026
              </p>

              <p className="font-serif text-xl text-[#25291f] mt-2">
                Made with intention
              </p>
            </motion.div>
          </motion.div>


          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
          >

            <p className="text-xs uppercase tracking-[0.35em] text-[#7d895d] mb-5">
              Our Story
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-[#25291f]">
              Modesty,
              <br />
              <span className="italic text-[#7d895d]">
                beautifully yours.
              </span>
            </h2>

            <div className="w-14 h-[1px] bg-[#7d895d] my-8"></div>

            <p className="text-sm md:text-base leading-8 text-[#5f674d] max-w-lg">
              SHA.MODESTY was created for women who believe that modesty and
              personal style can exist beautifully together.
            </p>

            <p className="text-sm md:text-base leading-8 text-[#5f674d] max-w-lg mt-5">
              Every piece is thoughtfully designed with graceful silhouettes,
              comfortable fabrics and timeless details — made to become a
              meaningful part of your wardrobe.
            </p>

            <p className="text-sm md:text-base leading-8 text-[#5f674d] max-w-lg mt-5">
              From everyday essentials to pieces for special moments,
              SHA.MODESTY celebrates quiet confidence and effortless elegance.
            </p>

            {/* Button */}
            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-3 mt-9 text-xs uppercase tracking-[0.22em] text-[#4a5338] border-b border-[#4a5338] pb-3 group"
            >
              Discover our story

              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;