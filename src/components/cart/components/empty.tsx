import React from "react";
import { GiShoppingCart } from "react-icons/gi";

const Empty = () => {
  return (
    <div className="w-full flex flex-col items-center pt-11 ">
      <div className="p-10 rounded-full bg-[#f8f8f8] ">
        <GiShoppingCart size="30px" color="#8f8f8f" />
      </div>
      <p className="text-[14px] text-center text-light-gray mt-[18px] mb-5">
        Pas de produit dans le panier
      </p>
      <button className="mt-[15px] text-[14px] rounded-full text-white transition-all duration-300 ease-in hover:bg-secondary bg-primary py-[10px] px-[22px]">
        Continuer le chopping
      </button>
    </div>
  );
};

export default Empty;
