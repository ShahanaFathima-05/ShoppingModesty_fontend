import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <section
      id="contact"
      className="bg-[#4a5338] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">

        {/* Small Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs uppercase tracking-[0.35em] text-[#c5ccab] mb-5"
        >
          Stay in the know
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#f8f6ee] leading-tight"
        >
          A little elegance,
          <br />
          <span className="italic text-[#c5ccab]">
            delivered.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto mt-7 text-sm md:text-base leading-7 text-[#d8dacd]"
        >
          Subscribe to receive first access to new collections,
          thoughtful styling inspiration and special offers from
          SHA.MODESTY.
        </motion.p>

        {/* Newsletter Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl mx-auto mt-10"
        >
          {!subscribed ? (
            <div className="flex flex-col sm:flex-row border-b border-[#c5ccab]/60">

              {/* Email */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent px-0 py-4 text-sm text-[#f8f6ee] placeholder:text-[#c5ccab]/70 outline-none"
              />

              {/* Subscribe Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-3 py-4 sm:py-0 text-xs uppercase tracking-[0.2em] text-[#f8f6ee] hover:text-[#c5ccab] transition-colors duration-300"
              >
                Subscribe

                <FiArrowUpRight
                  size={17}
                  className="transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1"
                />
              </button>

            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 border-b border-[#c5ccab]/60 py-4 text-sm text-[#f8f6ee]"
            >
              <span className="w-7 h-7 rounded-full bg-[#c5ccab] text-[#4a5338] flex items-center justify-center">
                <FiCheck size={15} />
              </span>

              You're now part of the OLIVÉA circle.
            </motion.div>
          )}
        </motion.form>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-[9px] uppercase tracking-[0.3em] text-[#c5ccab]/70"
        >
          No clutter. Just beautiful things.
        </motion.p>

      </div>
    </section>
  );
}

export default Newsletter;