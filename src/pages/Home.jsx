import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Collection from "../components/Collection";
import Products from "../components/Products";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#f8f6ee]">
      <Navbar />

      <Hero />

      <Collection />

      <Products />

      <About />

      <Newsletter />

      <Footer />
    </div>
  );
}

export default Home;