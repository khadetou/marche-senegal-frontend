import { FaBars } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { FC, useState } from "react";
import Drawer from "./drawer";
import Scrollbars from "react-custom-scrollbars-2";
import Produit from "/public/images/produit.jpg";
import Image from "next/image";

const categories = ["Nut & seed", "Oil", "Fruits", "Tomato", "Soup"];
const ProductDrawer: FC<{ open: boolean; setOpen: any }> = ({
  open,
  setOpen,
}) => {
  return (
    <Drawer
      drawerHandler={
        <div className="flex items-center justify-center shrink-0 w-[26px]">
          <FaBars size="26px" color="#000" />
        </div>
      }
      open={open}
      toggleHandler={() => setOpen(!open)}
      closeButton={<VscClose size="26px" color="#8f8f8f" />}
      drawerStyle="w-full h-full"
      closeBtnStyle="flex items-center justify-center top-[25px] right-[30px] absolute z-10 cursor-pointer"
    >
      <div className=" p-10">
        <h2 className="mb-5 text-lg text-[#2b2b2b]">Catégories</h2>
        <ul className="mb-10">
          {categories.map((item, idx) => (
            <li
              className="text-sm text-[#8b8b8b] h-[36px] flex items-center w-full"
              key={idx}
            >
              {item}
            </li>
          ))}
        </ul>
        <div>
          <h2 className="mb-5 text-lg text-[#2b2b2b]">Range Price</h2>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-secondary shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 
                w-[20px]
                h-[20px]
                focus:ring-opacity-50 mr-[8.4px]"
            />
            <label className="text-[#8f8f8f] text-sm">$0.00 - $100.00</label>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ProductDrawer;
