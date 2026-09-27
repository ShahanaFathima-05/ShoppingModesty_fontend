import React, { useState } from "react";
import {
  FiHeart,
  FiPlus,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  getCartApi,
  addToCartApi,
  updateCartApi,
  getWishlistApi,
  addToWishlistApi,
  deleteFromWishlistApi,
} from "../services/productApi";

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [adding, setAdding] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);

  // =========================
  // QUICK ADD TO CART
  // =========================

  const handleQuickAdd = async () => {
    if (adding) return;

    try {
      setAdding(true);

      const response = await getCartApi();
      const cartItems = response.data;

      const existingItem = cartItems.find(
        (item) => Number(item.productId) === Number(product.id)
      );

      if (existingItem) {
        await updateCartApi(existingItem.id, {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        });
      } else {
        await addToCartApi({
          productId: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.image,
          quantity: 1,
        });
      }

      setAdded(true);

      setTimeout(() => {
        setAdded(false);
      }, 2000);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    } finally {
      setAdding(false);
    }
  };

  // =========================
  // WISHLIST
  // =========================

  const handleWishlist = async () => {
    if (wishlistLoading) return;

    try {
      setWishlistLoading(true);

      const response = await getWishlistApi();
      const wishlistItems = response.data;

      const existingItem = wishlistItems.find(
        (item) => Number(item.productId) === Number(product.id)
      );

      // Remove from wishlist
      if (existingItem) {
        await deleteFromWishlistApi(existingItem.id);
        setLiked(false);
      }

      // Add to wishlist
      else {
        await addToWishlistApi({
          productId: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.image,
        });

        setLiked(true);
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    } finally {
      setWishlistLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="group"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-[#e9e3d6] aspect-[3/4]">

        {/* New Badge */}
        {product.isNew && (
          <span className="absolute top-5 left-5 z-20 bg-[#f8f6ee] px-3 py-2 text-[9px] uppercase tracking-[0.25em] text-[#4a5338]">
            New
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          disabled={wishlistLoading}
          className={`absolute top-5 right-5 z-20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
            liked
              ? "bg-[#4a5338] text-[#f8f6ee]"
              : "bg-[#f8f6ee]/80 text-[#4a5338] hover:bg-[#f8f6ee]"
          }`}
          aria-label={
            liked
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          <FiHeart
            size={17}
            className={liked ? "fill-current" : ""}
          />
        </button>

        {/* Main Image */}
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
        />

        {/* Hover Image */}
        <img
          src={product.hoverImage}
          alt={`${product.name} alternate`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#25291f]/40 to-transparent pointer-events-none" />

        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">

          <button
            onClick={handleQuickAdd}
            disabled={adding}
            className="w-full bg-[#f8f6ee] text-[#4a5338] py-4 text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-[#a3ad82] hover:text-[#25291f] transition-colors duration-300 disabled:opacity-70"
          >
            {added ? (
              <>
                <FiCheck size={15} />
                Added
              </>
            ) : (
              <>
                <FiPlus size={15} />
                {adding ? "Adding..." : "Quick Add"}
              </>
            )}
          </button>

        </div>
      </div>

      {/* Product Information */}
      <div className="pt-5">

        <div className="flex items-start justify-between gap-4">

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a9270] mb-2">
              {product.category}
            </p>

            <h3 className="font-serif text-xl text-[#25291f]">
              {product.name}
            </h3>
          </div>

          <p className="text-sm text-[#4a5338] pt-1 whitespace-nowrap">
            ₹{product.price}
          </p>

        </div>

        {/* View Product */}
        <Link
          to={`/product/${product.id}`}
          className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#6d7656] group/link w-fit"
        >
          View product

          <FiArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
          />
        </Link>

      </div>
    </motion.div>
  );
}

export default ProductCard;