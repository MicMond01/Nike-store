import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedLogin from "./ProtectLogin";
import Payment from "./components/stripe/Payment";

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
            <Route path="/signUp" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route element={<ProtectedLogin />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/Payment" element={<Payment />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
};

export default App;
