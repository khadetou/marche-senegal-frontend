import React, { useState } from "react";
import Image from "next/image";
import { FiFilter } from "react-icons/fi";
import StarsRating from "react-star-rate";
import { HiStar } from "react-icons/hi";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import ProductDrawer from "./drawer/productDrawer";

const products = [
  {
    img: "https://res.cloudinary.com/didh3wbru/image/upload/v1658049952/Ecommerce/Images/Products/product-3-300x300_atwsjo.jpg",
    name: "Egg",
    rating: 3,
    price: "$35.00",
  },
  {
    img: "https://res.cloudinary.com/didh3wbru/image/upload/v1658049944/Ecommerce/Images/Products/product-10-300x300_tnqcvo.jpg",
    name: "Meat",
    rating: 4.5,
    price: "$105.00",
  },
  {
    img: "https://res.cloudinary.com/didh3wbru/image/upload/v1658049934/Ecommerce/Images/Products/product-22-300x300_1_mwv2n6.jpg",
    name: "Onion",
    rating: 3.5,
    price: "$60.00",
  },
  {
    img: "https://res.cloudinary.com/didh3wbru/image/upload/v1658049924/Ecommerce/Images/Products/product-33-300x300_hkphav.jpg",
    name: "Bread",
    rating: 5,
    price: "$70.00",
  },
  {
    img: "https://res.cloudinary.com/didh3wbru/image/upload/v1658049917/Ecommerce/Images/Products/product-18-300x300_z1w6ym.jpg",
    name: "Rustic paper pants",
    rating: 5,
    price: "$80.00",
  },
];

const categories = ["Nut & seed", "Oil", "Fruits", "Tomato", "Soup"];

const ProductsList = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="mt-4 pb-8">
      <div className="containers flex flex-col items-center md:items-start md:flex-row">
        <ProductDrawer open={open} setOpen={setOpen} />
        <button
          className="flex md:hidden justify-center items-center rounded-md border border-primary hover:bg-primary hover:text-white transition-all ease-in duration-300 text-base w-24 h-9 font-bold"
          onClick={() => setOpen(true)}
        >
          <FiFilter className="mr-1" />
          Filter
        </button>
        <div className="w-[234px] hidden md:block">
          <div className="mb-10 ">
            <h2 className="mb-5 text-lg text-[#2b2b2b]">Catégories</h2>
            <ul>
              {categories.map((item, idx) => (
                <li
                  className="text-sm text-[#8b8b8b] h-[36px] flex items-center w-full"
                  key={idx}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-0 md:ml-[30px] w-full">
          {products.map(({ img, name, price, rating }, idx) => (
            <div key={idx} className="w-full h-full">
              <div className="w-full group h-full mx-auto max-w-[216px] relative">
                <span className="cursor-pointer p-3 rounded-sm right-0 absolute bg-white z-50 shadow-lg text-[#8f8f8f8f] hover:bg-secondary hover:text-white -translate-y-[150%] group-hover:translate-y-[0%] group-hover:visible group-hover:opacity-100 opacity-0 transition-all ease-linear duration-300 invisible">
                  <AiOutlineEye />
                </span>
                <div className="w-[166px] h-[166px] cursor-pointer  mx-auto relative">
                  <Image src={img} layout="fill" />
                </div>
                <div className="flex flex-col justify-center py-[25px] px-[15px]">
                  <h2 className="text-center text-[14px] -mb-[20px] hover:text-[#A8B324]">
                    {name}
                  </h2>
                  <div className="flex justify-center stars ">
                    <StarsRating
                      value={rating}
                      disabled
                      symbol={<HiStar size="25px" />}
                      classNamePrefix="stars"
                    />
                  </div>
                  <h2 className="text-center text-[#A8B324] font-bold text-base">
                    {price}
                  </h2>
                  <button className="bg-primary rounded-full flex justify-center items-center w-[127px] mx-auto mt-4 text-white text-[14px] px-[5px] py-[9px] font-normal">
                    <FaOpencart className="mr-1" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default ProductsList;
