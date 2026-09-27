import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getCartApi,
  updateCartApi,
  deleteFromCartApi,
} from "../services/productApi";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get cart items
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getCartApi();
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // Increase quantity
  const increaseQuantity = async (item) => {
    try {
      const updatedItem = {
        ...item,
        quantity: item.quantity + 1,
      };

      const response = await updateCartApi(item.id, updatedItem);

      setCartItems((currentItems) =>
        currentItems.map((cartItem) =>
          cartItem.id === item.id ? response.data : cartItem
        )
      );
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  // Decrease quantity
  const decreaseQuantity = async (item) => {
    if (item.quantity <= 1) {
      return;
    }

    try {
      const updatedItem = {
        ...item,
        quantity: item.quantity - 1,
      };

      const response = await updateCartApi(item.id, updatedItem);

      setCartItems((currentItems) =>
        currentItems.map((cartItem) =>
          cartItem.id === item.id ? response.data : cartItem
        )
      );
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  // Remove item
  const removeItem = async (id) => {
    try {
      await deleteFromCartApi(id);

      setCartItems((currentItems) =>
        currentItems.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // Total quantity
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#f8f6ee]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

        {/* Page Header */}
        <div className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a9270] mb-4">
            Your shopping bag
          </p>

          <h1 className="text-4xl md:text-6xl text-[#25291f]">
            Shopping Bag
          </h1>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-20 text-center">
            <p className="text-sm text-[#6d7656]">
              Loading your bag...
            </p>
          </div>
        )}

        {/* Empty Cart */}
        {!loading && cartItems.length === 0 && (
          <div className="min-h-[45vh] flex items-center justify-center">
            <div className="text-center max-w-lg">

              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#e9e3d6] flex items-center justify-center text-[#4a5338]">
                <FiShoppingBag size={28} strokeWidth={1.3} />
              </div>

              <h2 className="text-3xl md:text-4xl text-[#25291f] mb-5">
                Your bag is empty
              </h2>

              <p className="text-sm leading-7 text-[#6d7656]">
                Discover our carefully curated collection of modest pieces
                designed to make every moment beautifully yours.
              </p>

              <Link
                to="/shop"
                className="group mt-9 inline-flex items-center gap-3 bg-[#4a5338] text-[#f8f6ee] px-7 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-[#a3ad82] hover:text-[#25291f] transition-colors duration-300"
              >
                <FiArrowLeft
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />

                Continue Shopping
              </Link>

            </div>
          </div>
        )}

        {/* Cart Content */}
        {!loading && cartItems.length > 0 && (
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Cart Items */}
            <div className="lg:col-span-2">

              <div className="flex items-center justify-between border-b border-[#d9d4c7] pb-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#6d7656]">
                  {totalItems} {totalItems === 1 ? "Item" : "Items"}
                </p>

                <Link
                  to="/shop"
                  className="text-[10px] uppercase tracking-[0.2em] text-[#4a5338] hover:text-[#8a9270] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>

              <div>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="py-7 border-b border-[#d9d4c7] flex gap-5 md:gap-7"
                  >

                    {/* Product Image */}
                    <Link
                      to={`/product/${item.productId}`}
                      className="w-28 h-36 md:w-36 md:h-44 shrink-0 overflow-hidden bg-[#e9e3d6]"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between">

                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.2em] text-[#8a9270] mb-2">
                            {item.category}
                          </p>

                          <Link
                            to={`/product/${item.productId}`}
                            className="font-serif text-xl md:text-2xl text-[#25291f] hover:text-[#4a5338] transition-colors"
                          >
                            {item.name}
                          </Link>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#8a9270] hover:text-[#4a5338] transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <FiTrash2 size={17} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-4 mt-6">

                        {/* Quantity */}
                        <div className="flex items-center border border-[#cfc9ba]">
                          <button
                            onClick={() => decreaseQuantity(item)}
                            disabled={item.quantity <= 1}
                            className="w-9 h-9 flex items-center justify-center text-[#4a5338] hover:bg-[#e9e3d6] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <FiMinus size={13} />
                          </button>

                          <span className="w-10 text-center text-xs text-[#25291f]">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item)}
                            className="w-9 h-9 flex items-center justify-center text-[#4a5338] hover:bg-[#e9e3d6] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <FiPlus size={13} />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-sm text-[#4a5338]">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </p>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#e9e3d6] p-7 md:p-9 sticky top-28">

                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a9270] mb-4">
                  Order Summary
                </p>

                <h2 className="font-serif text-3xl text-[#25291f] mb-8">
                  Your Order
                </h2>

                <div className="space-y-5">

                  <div className="flex justify-between text-sm text-[#6d7656]">
                    <span>Subtotal</span>
                    <span>
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm text-[#6d7656]">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>

                  <div className="border-t border-[#cfc9ba] pt-5 flex justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#4a5338]">
                      Total
                    </span>

                    <span className="font-serif text-2xl text-[#25291f]">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                </div>
                <Link to='/checkout'>
                <button
                  className="w-full mt-8 bg-[#4a5338] text-[#f8f6ee] py-4 text-[10px] uppercase tracking-[0.25em] hover:bg-[#a3ad82] hover:text-[#25291f] transition-colors duration-300"
                >
                  Proceed to Checkout
                </button>
                </Link>

                <p className="text-[9px] text-center tracking-[0.1em] text-[#8a9270] mt-5">
                  Secure checkout · Free shipping
                </p>

              </div>
            </div>

          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}

export default Cart;