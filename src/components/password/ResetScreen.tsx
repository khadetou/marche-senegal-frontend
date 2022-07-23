import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetScreen = () => {
  const [show, setShow] = useState(false);
  const [confShow, setConfShow] = useState(false);
  return (
    <section className="mb-28">
      <div className="containers">
        <h1 className="text-center my-[15px] text-xl text-[#2b2b2b]">
          Modifiez votre mot de passe
        </h1>
        <form className="max-w-[588px] p-[30px] mx-auto border-2 border-dashed">
          <div className="flex flex-col mb-4 relative">
            <label htmlFor="" className="text-base text-dark-gray">
              Mot de password <span className="text-red-600">*</span>
            </label>
            <input
              type={show ? "text" : "password"}
              className="w-full border-gray-200 mb-5 px-5 text-sm placeholder:text-gray-400 rounded-md h-[40px] focus:border-gray-200 focus:ring-0"
            />
            <div
              className="absolute right-5 cursor-pointer top-[50%] -translate-y-[45%]"
              onClick={() => setShow(!show)}
            >
              {show ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <div className="flex flex-col mb-4 relative">
            <label htmlFor="" className="text-base text-dark-gray">
              Confirmer Mot de password <span className="text-red-600">*</span>
            </label>
            <input
              type={confShow ? "text" : "password"}
              className="w-full border-gray-200 mb-5 px-5 text-sm placeholder:text-gray-400 rounded-md h-[40px] focus:border-gray-200 focus:ring-0"
            />
            <div
              className="absolute right-5 cursor-pointer top-[50%] -translate-y-[45%]"
              onClick={() => setConfShow(!confShow)}
            >
              {confShow ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <div className="flex justify-between">
            <button className="text-white bg-primary rounded-full text-sm font-medium py-3 px-7">
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetScreen;
