import React from "react";
import { useParams } from "react-router-dom";
import { FiHeart, FiShoppingBag, FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f8f6ee]">
        <Navbar />

        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">

            <h1 className="font-serif text-4xl text-[#25291f]">
              Product not found
            </h1>

            <a
              href="/shop"
              className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.2em] text-[#4a5338]"
            >
              <FiArrowLeft />
              Back to shop
            </a>

          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f6ee]">
      <Navbar />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Product Image */}
            <div className="relative">

              <div className="aspect-[3/4] overflow-hidden bg-[#e9e3d6]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

              </div>

              {product.isNew && (
                <span className="absolute top-5 left-5 bg-[#f8f6ee] px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-[#4a5338]">
                  New
                </span>
              )}

            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">

              <p className="text-xs uppercase tracking-[0.3em] text-[#7d895d]">
                {product.category}
              </p>

              <h1 className="font-serif text-4xl md:text-6xl text-[#25291f] mt-4">
                {product.name}
              </h1>

              <p className="text-xl text-[#4a5338] mt-6">
                ₹{product.price}
              </p>

              <div className="w-full h-[1px] bg-[#e9e3d6] my-8"></div>

              <p className="text-sm leading-8 text-[#6d7656] max-w-lg">
                Designed with graceful silhouettes and timeless details,
                this piece brings effortless elegance to your modest wardrobe.
              </p>

              {/* Quantity */}
              <div className="mt-8">

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#4a5338] mb-3">
                  Quantity
                </p>

                <div className="flex items-center border border-[#c5ccab] w-fit">

                  <button className="px-5 py-3 text-[#4a5338]">
                    −
                  </button>

                  <span className="px-5 text-sm">
                    1
                  </span>

                  <button className="px-5 py-3 text-[#4a5338]">
                    +
                  </button>

                </div>

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">

                <button className="flex-1 flex items-center justify-center gap-3 bg-[#4a5338] text-[#f8f6ee] py-4 text-xs uppercase tracking-[0.2em] hover:bg-[#5b6545] transition-colors">
                  <FiShoppingBag />
                  Add to bag
                </button>

                <button className="w-full sm:w-14 h-14 border border-[#c5ccab] flex items-center justify-center text-[#4a5338] hover:bg-[#c5ccab] transition-colors">
                  <FiHeart />
                </button>

              </div>

              {/* Product Info */}
              <div className="mt-10 space-y-4 text-xs text-[#6d7656]">

                <div className="flex justify-between border-b border-[#e9e3d6] pb-4">
                  <span>Category</span>
                  <span>{product.category}</span>
                </div>

                <div className="flex justify-between border-b border-[#e9e3d6] pb-4">
                  <span>Shipping</span>
                  <span>Available</span>
                </div>

                <div className="flex justify-between">
                  <span>Availability</span>
                  <span className="text-[#7d895d]">
                    In stock
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProductDetails;