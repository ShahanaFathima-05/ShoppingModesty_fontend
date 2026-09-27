import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHeart,
  FiShoppingBag,
  FiTrash2,
  FiArrowLeft,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getWishlistApi,
  deleteFromWishlistApi,
  addToCartApi,
  getCartApi,
  updateCartApi,
} from "../services/productApi";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get wishlist items
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await getWishlistApi();
        setWishlistItems(response.data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  // Remove from wishlist
  const removeFromWishlist = async (id) => {
    try {
      await deleteFromWishlistApi(id);

      setWishlistItems((currentItems) =>
        currentItems.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  // Move wishlist item to cart
  const moveToCart = async (item) => {
    try {
      const response = await getCartApi();
      const cartItems = response.data;

      const existingItem = cartItems.find(
        (cartItem) =>
          Number(cartItem.productId) === Number(item.productId)
      );

      if (existingItem) {
        await updateCartApi(existingItem.id, {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        });
      } else {
        await addToCartApi({
          productId: item.productId,
          name: item.name,
          category: item.category,
          price: item.price,
          image: item.image,
          quantity: 1,
        });
      }

      // Remove from wishlist after moving to cart
      await removeFromWishlist(item.id);

    } catch (error) {
      console.error("Error moving product to cart:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6ee]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a9270] mb-4">
            Saved pieces
          </p>

          <h1 className="text-4xl md:text-6xl text-[#25291f]">
            Wishlist
          </h1>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-20 text-center">
            <p className="text-sm text-[#6d7656]">
              Loading your wishlist...
            </p>
          </div>
        )}

        {/* Empty Wishlist */}
        {!loading && wishlistItems.length === 0 && (
          <div className="min-h-[45vh] flex items-center justify-center">
            <div className="text-center max-w-lg">

              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#e9e3d6] flex items-center justify-center text-[#4a5338]">
                <FiHeart size={28} strokeWidth={1.3} />
              </div>

              <h2 className="text-3xl md:text-4xl text-[#25291f] mb-5">
                Your wishlist is empty
              </h2>

              <p className="text-sm leading-7 text-[#6d7656]">
                Save the pieces you love and come back to them whenever
                you're ready.
              </p>

              <Link
                to="/shop"
                className="group mt-9 inline-flex items-center gap-3 bg-[#4a5338] text-[#f8f6ee] px-7 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-[#a3ad82] hover:text-[#25291f] transition-colors duration-300"
              >
                <FiArrowLeft
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />

                Explore Collection
              </Link>

            </div>
          </div>
        )}

        {/* Wishlist Products */}
        {!loading && wishlistItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

            {wishlistItems.map((item) => (
              <div key={item.id} className="group">

                {/* Image */}
                <div className="relative overflow-hidden bg-[#e9e3d6] aspect-[3/4]">

                  <Link to={`/product/${item.productId}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#f8f6ee]/90 text-[#4a5338] flex items-center justify-center hover:bg-[#4a5338] hover:text-[#f8f6ee] transition-all duration-300"
                    aria-label={`Remove ${item.name} from wishlist`}
                  >
                    <FiTrash2 size={16} />
                  </button>

                </div>

                {/* Product Information */}
                <div className="pt-5">

                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a9270] mb-2">
                    {item.category}
                  </p>

                  <div className="flex items-start justify-between gap-4">

                    <Link
                      to={`/product/${item.productId}`}
                      className="font-serif text-xl text-[#25291f] hover:text-[#4a5338] transition-colors"
                    >
                      {item.name}
                    </Link>

                    <p className="text-sm text-[#4a5338] whitespace-nowrap">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>

                  </div>

                  {/* Move To Cart */}
                  <button
                    onClick={() => moveToCart(item)}
                    className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#6d7656] hover:text-[#4a5338] transition-colors"
                  >
                    <FiShoppingBag size={14} />
                    Move to bag
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}

export default Wishlist;