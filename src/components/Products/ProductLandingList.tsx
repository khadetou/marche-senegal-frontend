import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import StarsRating from "react-star-rate";
import { HiStar } from "react-icons/hi";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

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

const ProductLandingList = () => {
  return (
    <section className="mt-4 mb-8">
      <div className="containers">
        <div className="p-[30px] w-full flex flex-col lg:flex-row  flex-1 justify-between bg-white rounded-sm">
          <div className="p-0 xs:p-[10px] mx-auto xs:m-0 box-content">
            <div className="flex items-center mb-6">
              <div className="rounded-full w-3 h-3 border border-secondary mr-5" />
              <h2 className="text-[25px] text-primary font-semibold">
                Shop Now
              </h2>
            </div>
            <div className="w-[179px] xs:w-[244px] h-[318px] relative">
              <Image
                src="https://res.cloudinary.com/didh3wbru/image/upload/v1658049972/Ecommerce/Images/side%20images/h1-banner-5-ok_r7vjkn.jpg"
                layout="fill"
                className="rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col self-end w-full max-w-[709px] xl:max-w-[900px] box-content p-[10px] h-[494px]">
            <ul className="flex flex-wrap xs:flex-nowrap w-full mb-[50px] justify-end">
              {categories.map((items, idx) => (
                <li
                  className="text-xs cursor-pointer  md:last:mr-[30px] text-[#8f8f8f] px-[5px] md:px-[10px] py-[15px] hover:text-[#A8B324]"
                  key={idx}
                >
                  {items}
                </li>
              ))}
            </ul>

            <div>
              <Swiper
                slidesPerView={1}
                // width={216}
                breakpoints={{
                  1025: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  450: {
                    slidesPerView: 2,
                  },
                }}
                // slidesPerGroup={4}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="h-full products"
              >
                {products.map(({ img, name, price, rating }, idx) => (
                  <SwiperSlide key={idx} className="w-full h-full">
                    <div className="w-full group h-full mx-auto max-w-[216px] relative">
                      <span className="cursor-pointer p-3 rounded-sm right-0 absolute bg-white z-50 shadow-lg text-[#8f8f8f8f] hover:bg-secondary hover:text-white -translate-y-[150%]  group-hover:translate-y-[0%] transition-all ease-linear duration-300">
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLandingList;
