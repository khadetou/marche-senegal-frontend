import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotScreen = () => {
  const [show, setShow] = useState(false);
  const [confShow, setConfShow] = useState(false);
  return (
    <section className="mb-28">
      <div className="containers">
        <h1 className="text-center my-[15px] text-xl text-[#2b2b2b]">
          Forgot Password
        </h1>
        <form className="max-w-[588px] p-[30px] mx-auto border-2 border-dashed">
          <div className="flex flex-col mb-4">
            <label htmlFor="" className="text-base text-dark-gray">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              className="w-full border-gray-200 mb-5 px-5 text-sm placeholder:text-gray-400 rounded-md h-[40px] focus:border-gray-200 focus:ring-0"
            />
          </div>
          <div className="flex justify-between">
            <button className="text-white bg-primary rounded-full text-sm font-medium py-3 px-7">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotScreen;
