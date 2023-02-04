import React from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
    cemail: false,
    agree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setInputValue((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputValue);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="bg-sky-500 h-screen"
      >
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-6 ">
          <form
            onSubmit={handleSubmit}
            className="py-3 md:px-6 sm:max-w-xl sm:mx-auto"
          >
            <div className="max-w-md mx-auto">
              <div>
                <img
                  src={logo}
                  className="w-25 h-10 mb-8 brightness-0"
                  alt="logo"
                />
                <h1 className="text-2xl ">Now let's make you a Nike Member.</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      value={inputValue?.email}
                      autoComplete="off"
                      onChange={handleChange}
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-12 w-full border-2 rounded-2xl border-zinc-500 mb-3 bg-transparent text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 -top-7 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative flex items-center justify-between md:flex-col">
                    <div className="relative md:w-full">
                      <input
                        value={inputValue?.fname}
                        autoComplete="off"
                        onChange={handleChange}
                        id="fname"
                        name="fname"
                        type="text"
                        className="peer placeholder-transparent h-12 w-full border-2 rounded-2xl border-zinc-500 mb-3 md:mb-6 bg-transparent text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="First Name"
                      />
                      <label
                        htmlFor="fname"
                        className="absolute left-3 -top-7 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        First Name
                      </label>
                    </div>
                    <div className="relative md:w-full">
                      <input
                        value={inputValue?.lname}
                        autoComplete="off"
                        onChange={handleChange}
                        id="lname"
                        name="lname"
                        type="text"
                        className="peer placeholder-transparent h-12 w-full border-2 rounded-2xl border-zinc-500 mb-3 bg-transparent text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Last Name"
                      />
                      <label
                        htmlFor="lname"
                        className="absolute left-3  -top75 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Last Name
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      value={inputValue?.password}
                      autoComplete="off"
                      onChange={handleChange}
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-12 w-full border-2 rounded-2xl border-zinc-500 mb-3 bg-transparent text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-3 -top-7 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>

                  <div className="relative flex  items-center ">
                    <input
                      value={inputValue?.cemail}
                      onChange={handleChange}
                      id="cemail"
                      name="cemail"
                      type="checkbox"
                      className="peer  border-zinc-500 mb-3 md:mb-0 h-5 w-5 accent-black focus:outline-none focus:borer-rose-600"
                    />
                    <label
                      htmlFor="cemail"
                      className="absolute left-10 text-gray-600 text-[15px] md:text-[10px] md:leading-normal "
                    >
                      Sign up for emails to get updates from Nike on products,
                      offers and your Member benefits
                    </label>
                  </div>
                  <div className="relative flex top-2 items-center ">
                    <input
                      value={inputValue?.agree}
                      onChange={handleChange}
                      id="agree"
                      name="agree"
                      type="checkbox"
                      className="peer  border-zinc-500 mb-3 md:mb-0 h-5 w-5 accent-black focus:outline-none focus:borer-rose-600"
                    />
                    <label
                      htmlFor="agree"
                      className="absolute left-10 text-gray-600 text-[15px] md:text-[10px] md:leading-normal "
                    >
                      I agree to Nike's Privacy Policy and Terms of Use.
                    </label>
                  </div>

                  <div className="relative w-full ">
                    <button className=" absolute right-0 button-theme bg-slate-900 text-white shadow-slate-500 rounded-xl my-2 h-10 ">
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default SignUp;
