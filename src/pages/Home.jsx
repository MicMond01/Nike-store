import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

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

  const { user, value } = useSelector((state) => state.countState);
  // console.log(user);
  const openAndCloseCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Navbar openAndCloseCart={openAndCloseCart} />
      <Cart showCart={showCart} openAndCloseCart={openAndCloseCart} />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default Home;
