import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCheck,
  FiLock,
  FiShoppingBag,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getCartApi } from "../services/productApi";

function Checkout() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await getCartApi();

        if (response.data.length === 0) {
          navigate("/cart");
          return;
        }

        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    /*
      Replace this with your WhatsApp number.

      Example:
      919876543210

      Do not add:
      +
      spaces
      brackets
      hyphens
    */
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

    // Create product list
    const itemsMessage = cartItems
      .map(
        (item) =>
          `• ${item.name} × ${item.quantity} — ₹${(
            item.price * item.quantity
          ).toLocaleString("en-IN")}`
      )
      .join("\n");

    // Create complete WhatsApp message
    const message = `
🛍️ *NEW Sha.Modesty ORDER*

*Customer Details*
Name: ${formData.fullname}
Phone: ${formData.phone}
Email: ${formData.email}

*Shipping Address*
${formData.address}
${formData.city}, ${formData.state}
PIN: ${formData.pincode}

*Order Details*
${itemsMessage}

*Payment Method*
${
  paymentMethod === "cod"
    ? "Cash on Delivery"
    : "Online Payment"
}

*Total: ₹${subtotal.toLocaleString("en-IN")}*

Thank you for shopping with Sha.Modesty.
"Modesty, beautifully yours."
`;

    // Convert message into URL format
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show confirmation
    setOrderPlaced(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f6ee]">
        <Navbar />

        <div className="min-h-[60vh] flex items-center justify-center">
          <p className="text-sm text-[#6d7656]">
            Loading checkout...
          </p>
        </div>

        <Footer />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#f8f6ee]">
        <Navbar />

        <main className="max-w-3xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#e9e3d6] flex items-center justify-center text-[#4a5338]">
              <FiCheck size={30} strokeWidth={1.5} />
            </div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a9270] mb-4">
              Order ready
            </p>

            <h1 className="text-4xl md:text-5xl text-[#25291f] mb-6">
              Thank You
            </h1>

            <p className="text-sm leading-7 text-[#6d7656] max-w-md mx-auto">
              Your order details have been prepared in WhatsApp.
              Please tap <strong>Send</strong> in WhatsApp to complete
              your order.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 bg-[#4a5338] text-[#f8f6ee] px-7 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-[#a3ad82] hover:text-[#25291f] transition-colors duration-300"
              >
                Continue Shopping
              </Link>

              <Link
                to="/"
                className="text-[10px] uppercase tracking-[0.2em] text-[#4a5338] hover:text-[#8a9270] transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f6ee]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

        {/* Header */}

        <div className="mb-14">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#6d7656] hover:text-[#4a5338] transition-colors mb-7"
          >
            <FiArrowLeft size={14} />
            Back to shopping bag
          </Link>

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a9270] mb-4">
            Complete your purchase
          </p>

          <h1 className="text-4xl md:text-6xl text-[#25291f]">
            Checkout
          </h1>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="grid lg:grid-cols-3 gap-12">

            {/* LEFT SIDE */}

            <div className="lg:col-span-2 space-y-10">

              {/* Contact Information */}

              <section>
                <div className="border-b border-[#d9d4c7] pb-5 mb-7">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a9270] mb-2">
                    01
                  </p>

                  <h2 className="font-serif text-3xl text-[#25291f]">
                    Contact Information
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="md:col-span-2">
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#6d7656] mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full bg-transparent border border-[#cfc9ba] px-4 py-4 text-sm text-[#25291f] outline-none focus:border-[#4a5338] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#6d7656] mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-transparent border border-[#cfc9ba] px-4 py-4 text-sm text-[#25291f] outline-none focus:border-[#4a5338] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#6d7656] mb-2">
                      Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter phone number"
                      className="w-full bg-transparent border border-[#cfc9ba] px-4 py-4 text-sm text-[#25291f] outline-none focus:border-[#4a5338] transition-colors"
                    />
                  </div>
                </div>
              </section>

              {/* Shipping Address */}

              <section>
                <div className="border-b border-[#d9d4c7] pb-5 mb-7">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a9270] mb-2">
                    02
                  </p>

                  <h2 className="font-serif text-3xl text-[#25291f]">
                    Shipping Address
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="md:col-span-2">
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#6d7656] mb-2">
                      Address
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="House number, street, locality"
                      className="w-full bg-transparent border border-[#cfc9ba] px-4 py-4 text-sm text-[#25291f] outline-none focus:border-[#4a5338] transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#6d7656] mb-2">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="City"
                      className="w-full bg-transparent border border-[#cfc9ba] px-4 py-4 text-sm text-[#25291f] outline-none focus:border-[#4a5338] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#6d7656] mb-2">
                      State
                    </label>

                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      placeholder="State"
                      className="w-full bg-transparent border border-[#cfc9ba] px-4 py-4 text-sm text-[#25291f] outline-none focus:border-[#4a5338] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#6d7656] mb-2">
                      PIN Code
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      placeholder="PIN code"
                      className="w-full bg-transparent border border-[#cfc9ba] px-4 py-4 text-sm text-[#25291f] outline-none focus:border-[#4a5338] transition-colors"
                    />
                  </div>
                </div>
              </section>

              {/* Payment */}

              <section>
                <div className="border-b border-[#d9d4c7] pb-5 mb-7">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a9270] mb-2">
                    03
                  </p>

                  <h2 className="font-serif text-3xl text-[#25291f]">
                    Payment Method
                  </h2>
                </div>

                <div className="space-y-4">

                  <label className="flex items-center gap-4 border border-[#cfc9ba] p-5 cursor-pointer hover:border-[#4a5338] transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                      className="accent-[#4a5338]"
                    />

                    <div>
                      <p className="text-sm text-[#25291f]">
                        Cash on Delivery
                      </p>

                      <p className="text-xs text-[#8a9270] mt-1">
                        Pay when your order arrives
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-4 border border-[#cfc9ba] p-5 cursor-pointer hover:border-[#4a5338] transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="online"
                      checked={paymentMethod === "online"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                      className="accent-[#4a5338]"
                    />

                    <div>
                      <p className="text-sm text-[#25291f]">
                        Online Payment
                      </p>

                      <p className="text-xs text-[#8a9270] mt-1">
                        UPI / Card / Net Banking
                      </p>
                    </div>
                  </label>

                </div>
              </section>
            </div>

            {/* RIGHT SIDE */}

            <div className="lg:col-span-1">
              <div className="bg-[#e9e3d6] p-7 md:p-9 sticky top-28">

                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a9270] mb-4">
                  Your order
                </p>

                <h2 className="font-serif text-3xl text-[#25291f] mb-8">
                  Order Summary
                </h2>

                <div className="space-y-5">

                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4"
                    >
                      <div className="w-16 h-20 shrink-0 overflow-hidden bg-[#d9d4c7]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">

                        <p className="font-serif text-base text-[#25291f]">
                          {item.name}
                        </p>

                        <p className="text-[9px] uppercase tracking-[0.15em] text-[#8a9270] mt-1">
                          Qty: {item.quantity}
                        </p>

                        <p className="text-sm text-[#4a5338] mt-2">
                          ₹
                          {(
                            item.price * item.quantity
                          ).toLocaleString("en-IN")}
                        </p>

                      </div>
                    </div>
                  ))}

                </div>

                <div className="border-t border-[#cfc9ba] mt-8 pt-6 space-y-5">

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

                <button
                  type="submit"
                  className="w-full mt-8 bg-[#4a5338] text-[#f8f6ee] py-4 text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-[#a3ad82] hover:text-[#25291f] transition-colors duration-300"
                >
                  <FiLock size={14} />
                  Place Order
                </button>

                <p className="text-[9px] text-center tracking-[0.1em] text-[#8a9270] mt-5">
                  WhatsApp order confirmation
                </p>

              </div>
            </div>

          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default Checkout;