import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const FirstPage = () => {
  const navigate = useNavigate();

  //   const goToSignUp = (event) => {
  //     event.preventDefault();
  //     navigate("/SignUp");
  //   };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className=" w-screen h-screen flex flex-col bg-gradient-to-tr fr  from-sky-500 to-slate-300 page"
      >
        <div className=" pl-8 pt-10 ">
          <h2 className="text-slate-800 text-2xl">Nike Membership</h2>
        </div>
        <div className="flex h-[80vh] items-center justify-center ">
          <div className="t text-center">
            <h1 className="f font-extrabold text-7xl text-slate-900">
              BECOME A <br /> MEMBER
            </h1>
            <p className="mt-6 text-[1.3rem] text-slate-900">
              Sign up for free. Join the community.
            </p>
            <Link to="/Login">
              <button
                type="button"
                className="mt-6 button-theme bg-slate-900 shadow-slate-900 text-slate-100 rounded-xl my-5"
                // onClick={goToSignUp}
              >
                Join Us
              </button>
            </Link>

            <h3></h3>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FirstPage;
