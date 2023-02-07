import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedLogin from "./ProtectLogin";

const App = () => {
  // console.log(heroapi.img);
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route element={<ProtectedLogin />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
};

export default App;
