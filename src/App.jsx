import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

import { AnimatePresence } from "framer-motion";
import Login from './pages/Login';

const App = () => {
  // console.log(heroapi.img);
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
};

export default App;
