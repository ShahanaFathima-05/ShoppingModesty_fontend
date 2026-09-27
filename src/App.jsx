import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Chekout";
import Collection from "./components/Collection";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/shop" element={<Shop />} />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route path="/cart" element={<Cart />} />

      <Route path="/wishlist" element={<Wishlist />} />
      
      <Route path="/checkout" element={<Checkout />} />

      <Route path="/collection" element={<Collection />} />

      <Route path="/about" element={<About />} />
      

    </Routes>
  );
}

export default App;