import React from "react";
import { useState, useEffect } from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Hero,
  Sales,
  FlexContent,
  Stories,
  Footer,
  Navbar,
  Cart,
} from "../components";

import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "../data/data";

const Home = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const item = localStorage.getItem("filteredArray");
    const parseItem = item ? JSON.parse(item) : [];

    setCartCount(parseItem.length);
  }, []);

  // console.log(user);
  const openAndCloseCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Navbar openAndCloseCart={openAndCloseCart} cartCount={cartCount} />
      {showCart && (
        <Cart showCart={showCart} openAndCloseCart={openAndCloseCart} />
      )}
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />

        <Sales endpoint={popularsales} setCartCount={setCartCount} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} setCartCount={setCartCount} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default Home;
