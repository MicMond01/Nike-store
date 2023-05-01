import React, { useEffect, useState } from "react";

import {
  HeartIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import toast from "react-hot-toast";

const Navbar = ({ openAndCloseCart, cartCount }) => {
  const [localItem, setLocalItem] = useState([]);
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const logOut = () => {
      window.localStorage.clear();
      window.location.reload(true)
  };

  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center cursor-pointer">
          
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center"></li>
            <li className="grid items-center popover__wrapper">
              <UserIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
              <button
                onClick={logOut}
                className={`absolute top-12  shadow w-20 h-9 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 popover__content  ${
                  navState
                    ? "bg-slate-900 text-slate-100 shadow-slate-900"
                    : "bg-slate-100 text-slate-900 shadow-slate-100"
                }`}
              >
                Logout
              </button>
            </li>
            <li className="grid items-center" onClick={openAndCloseCart}>
              <button
                type="button"
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {cartCount}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
