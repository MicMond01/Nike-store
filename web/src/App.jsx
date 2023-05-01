import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedLogin from "./ProtectLogin";
import Payment from "./checkout/Payment";
import Completion from "./checkout/Completion";

// import StripeContainer from "./components/stripe/StripeContainer";

const App = () => {
  // console.log(heroapi.img);
  // console.log("hiiiii");
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route element={<ProtectedLogin />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/payment" element={<Payment />} />
            <Route path="/completion" element={<Completion />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
};

export default App;
