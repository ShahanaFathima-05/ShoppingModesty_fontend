import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSliders } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProductsApi } from "../services/productApi";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const urlCategory = searchParams.get("category") || "All";

  const [category, setCategory] = useState(urlCategory);

  const categories = [
    "All",
    "Abayas",
    "Dresses",
    "Hijabs",
    "Kaftans",
  ];

  // Fetch products from JSON Server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductsApi();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Update category when URL changes
  useEffect(() => {
    setCategory(urlCategory);
  }, [urlCategory]);

  // Change category
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);

    if (selectedCategory === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: selectedCategory,
      });
    }
  };

  // Filter products
  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() ===
            category.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-[#f8f6ee]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.3em] text-[#8a9270] mb-4"
          >
            OLIVÉA Collection
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl text-[#25291f]"
          >
            {category === "All" ? "Shop All" : category}
          </motion.h1>
        </div>

        {/* Filters */}
        <div className="border-y border-[#d9d4c7] py-5 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div className="flex items-center gap-3">
            <FiSliders
              size={15}
              className="text-[#6d7656]"
            />

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#6d7656]">
              Filter by
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => handleCategoryChange(item)}
                className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] border transition-all duration-300 ${
                  category === item
                    ? "bg-[#4a5338] text-[#f8f6ee] border-[#4a5338]"
                    : "border-[#cfc9ba] text-[#6d7656] hover:border-[#4a5338] hover:text-[#4a5338]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

        </div>

        {/* Loading */}
        {loading && (
          <div className="py-20 text-center">
            <p className="text-sm text-[#6d7656]">
              Loading our collection...
            </p>
          </div>
        )}

        {/* Products */}
        {!loading && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

        {/* No Products */}
        {!loading && filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-[#6d7656]">
              No products found in this collection.
            </p>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}

export default Shop;