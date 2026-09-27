import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const collections = [
  {
    title: "Abayas",
    subtitle: "Flowing silhouettes",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Dresses",
    subtitle: "Effortless elegance",
    image:
      "https://images.unsplash.com/photo-1585488439890-4e7dfc4b4e8b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Hijabs",
    subtitle: "Everyday essentials",
    image:
      "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Kaftans",
    subtitle: "Graceful occasions",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85",
  },
];

function Collection() {
  return (
    <section
      id="collections"
      className="bg-[#4a5338] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Heading */}
        <div className="mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-[#c5ccab] mb-4"
          >
            Explore our world
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-[#f8f6ee]"
          >
            Collections
          </motion.h2>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden aspect-[4/3]"
            >
              {/* Image */}
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#25291f]/80 via-[#25291f]/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9 flex items-end justify-between">

                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#c5ccab] mb-2">
                    {collection.subtitle}
                  </p>

                  <h3 className="text-3xl md:text-4xl text-[#f8f6ee]">
                    {collection.title}
                  </h3>
                </div>

                {/* Collection Link */}
                <Link
                  to={`/shop?category=${collection.title}`}
                  aria-label={`Explore ${collection.title}`}
                  className="w-11 h-11 rounded-full border border-[#f8f6ee]/60 flex items-center justify-center text-[#f8f6ee] group-hover:bg-[#f8f6ee] group-hover:text-[#4a5338] transition-all duration-500"
                >
                  <FiArrowUpRight
                    size={18}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Collection;