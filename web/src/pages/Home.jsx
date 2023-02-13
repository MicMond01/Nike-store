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
// import StripeContainer from "../components/stripe/StripeContainer";

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
  const [showItem, setShowItem] = useState(false);
  const [sumTotal, setSumTotal] = useState(0);

  useEffect(() => {
    const getItem = localStorage.getItem("filteredArray");

    const parseItem = getItem ? JSON.parse(getItem) : [];

    setCartCount(parseItem.length);
  }, []);

  useEffect(() => {
    const getItem = localStorage.getItem("filteredArray");
    const parseItem = getItem ? JSON.parse(getItem) : [];

    const sumOfPrice = parseItem.map(
      (item) => Number(item.price) * item.quantity
    );
    const result = sumOfPrice.reduce((sum, num) => sum + num, 0);

    localStorage.setItem("total", JSON.stringify(result));
    setSumTotal(result);
  }, []);

  // console.log(user);
  const openAndCloseCart = () => {
    setShowCart(!showCart);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // setShowItem(true);
  };

  return (
    <>
      <div>
        <Navbar openAndCloseCart={openAndCloseCart} cartCount={cartCount} />
        {showCart && (
          <Cart
            showCart={showCart}
            openAndCloseCart={openAndCloseCart}
            handleCheckout={handleCheckout}
            setCartCount={setCartCount}
            sumTotal={sumTotal}
            setSumTotal={setSumTotal}
          />
        )}
        <main className="flex flex-col gap-16 relative">
          <Hero heroapi={heroapi} />

          <Sales
            endpoint={popularsales}
            setCartCount={setCartCount}
            ifExists
            openAndCloseCart={openAndCloseCart}
            setSumTotal={setSumTotal}
          />
          <FlexContent endpoint={highlight} ifExists />
          <Sales
            endpoint={toprateslaes}
            setCartCount={setCartCount}
            openAndCloseCart={openAndCloseCart}
            setSumTotal={setSumTotal}
          />
          <FlexContent endpoint={sneaker} />
          <Stories story={story} />
        </main>
        <Footer footerAPI={footerAPI} />
      </div>
    </>
  );
};

export default Home;
