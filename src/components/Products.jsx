import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";
import { getProductsApi } from "../services/productApi";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductsApi();

        // Show only 4 products in New Arrivals
        setProducts(response.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-[#f8f6ee] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.3em] text-[#8a9270] mb-4"
            >
              Curated for you
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl text-[#25291f]"
            >
              New Arrivals
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/shop"
              className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#4a5338] w-fit"
            >
              View all pieces

              <FiArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-20 text-center">
            <p className="text-sm text-[#6d7656]">
              Loading our collection...
            </p>
          </div>
        )}

        {/* Only 4 products */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

        {/* No products */}
        {!loading && products.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-[#6d7656]">
              No products available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;