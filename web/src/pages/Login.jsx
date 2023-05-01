import React from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/slice/counterSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [loginValue, setLoginValue] = useState({
    email: "admin@email.com",
    password: "admin123456",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setLoginValue((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, loginValue.email, loginValue.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.localStorage.setItem("uid", user.uid);
        dispatch(setUser(user));
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
      });
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
                <h1 className="text-2xl ">Now let's get you Shopping.</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      value={loginValue?.email}
                      autoComplete="off"
                      onChange={handleChange}
                      id="email"
                      name="email"
                      type="text"
                      className="px-4 peer placeholder-transparent h-12 w-full border-2 rounded-2xl border-zinc-500 mb-3 bg-transparent text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 -top-7 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      value={loginValue?.password}
                      autoComplete="off"
                      onChange={handleChange}
                      id="password"
                      name="password"
                      type="password"
                      className="px-4 peer placeholder-transparent h-12 w-full border-2 rounded-2xl border-zinc-500 mb-3 bg-transparent text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-3 -top-7 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <p className="text-red-600 text-[15px] md:text-[10px] md:leading-normal">
                    {error ? "Username or password is incorrect" : ""}
                  </p>

                  <div className="relative w-full flex justify-between ">
                    <p className=" absolute left-0 rounded-xl my-2 h-10 ">
                      Don't have an account?{" "}
                      <Link to="/SignUp" className="text-red-600">
                        {" "}
                        SignUp{" "}
                      </Link>
                    </p>
                    <button className=" absolute right-0 button-theme bg-slate-900 text-white shadow-slate-500 rounded-xl my-2 h-10 ">
                      Sign In
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

export default Login;
