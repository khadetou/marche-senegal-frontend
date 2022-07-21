import React, { useRef, useState } from "react";
import Image from "next/image";

const Test = () => {
  const starsList = ["\u2605", "\u2605", "\u2605", "\u2605", "\u2606", " "];
  const promotion = [
    "Up to US $25 off shipping",
    "Get $5.99 off every $200 spent with PayPal",
    "Bank Offers 5% Unlimited Cashback on Flipkart Axis Bank Credit",
    " Partner OfferSign up for Flipkart pay later and get Flipkart Gift Card worth £100",
  ];

  const lensRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const magnifiedRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const moveLens = (e: any) => {
    // console.log("X: ", e.pageX, " Y: ", e.pageY);
    let x, y, cx, cy;
    // Get the position of cursor
    const img_boundrect = imgRef.current?.getBoundingClientRect();
    console.log(img_boundrect);
    x = e.pageX - img_boundrect!.left - lensRef.current!.offsetWidth / 2;
    y = e.pageY - img_boundrect!.top - lensRef.current!.offsetHeight / 2;
    let max_xpos = img_boundrect!.width - lensRef.current!.offsetWidth;
    let max_ypos = img_boundrect!.height - lensRef.current!.offsetHeight;
    if (x > max_xpos) x = max_xpos;
    if (x < 0) x = 0;
    if (y > max_ypos) y = max_ypos;
    if (y < 0) y = 0;
    lensRef.current!.style.cssText = `top: ${y}px; left: ${x}px`;
    // Calculate the Magnified_img & Lens's Aspect Ratio
    cx = magnifiedRef.current!.offsetWidth / lensRef.current!.offsetWidth;
    cy = magnifiedRef.current!.offsetHeight / lensRef.current!.offsetHeight;
    const url = imgRef.current?.children[0]
      .lastChild as HTMLImageElement | null;
    magnifiedRef.current!.style.cssText = `background: url('${url!.src}')
     -${x * cx}px -${y * cy}px / ${img_boundrect!.width * cx}px ${
      img_boundrect!.height * cy
    }px no-repeat`;
    setActive(true);
  };

  const leaveLens = () => {
    setActive(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="card w-[95%] h-[60%] flex items-center justify-center max-w-[1200px] mx-auto px-6">
        <section
          className="product-img w-[40%] relative "
          onMouseMove={moveLens}
          onMouseOut={leaveLens}
        >
          <div ref={imgRef}>
            <Image
              src="https://res.cloudinary.com/didh3wbru/image/upload/v1658259275/Ecommerce/Images/test/isaac-martin-5Tm4YRqnNcM-unsplash_uqyjgk.jpg"
              layout="responsive"
              width="100%"
              height="100%"
              objectFit="contain"
              onMouseMove={moveLens}
              onMouseOut={leaveLens}
            />
          </div>
          <div
            ref={lensRef}
            className={`magnifier-lens absolute w-[150px] h-[100px] bg-[#ff980030]  border-[0.1px] border-orange-600 opacity-0 ${
              active && "opacity-100"
            }`}
          ></div>
        </section>
        <section className="product-details w-[60%] h-full flex flex-col justify-between relative">
          <h1 className="product-title font-semibold text-5xl leading-[1.2] ">
            S21+ Ultra 6.7 Inch Dual Sim Gps Navigation Smart 5G Cell Mobile
            Android Phone
          </h1>
          <div className="product-review">
            {starsList.map((item, idx) => (
              <span key={idx} className="star text-base text-orange-600 ">
                {item}
              </span>
            ))}
            <span className="star-rate">
              <mark className="px-[8px] py-[4px] rounded  bg-green-500 text-white ">
                4.0
              </mark>
              Stars
            </span>
            <span className="review-no">
              <mark className="px-[8px] py-[4px] rounded bg-green-500 text-white ">
                12k
              </mark>
              Reviews
            </span>
            <span className="quantity-sold">
              <mark className="px-[8px] py-[4px] rounded bg-green-500 text-white ">
                120k
              </mark>
              Buyers
            </span>
          </div>
          <div className="product-price">
            <p>Special price</p>
            <p className="current-price text-2xl font-medium text-orange-500">
              $99.99
            </p>
            <p className="original-price text-sm font-medium text-green-500">
              <del className="text-[#666]">$150</del> 34.4% off
            </p>
          </div>
          <div className="product-promotion font-medium text-base bg-blue-300 p-[10px] border-r-[0.4rem] text-blue-900">
            <p>Available Offers</p>
            <ul className="promotion-list">
              {promotion.map((item, idx) => (
                <li
                  className="promotion-item mt-[15px] first:mt-0 before:content-['\1f380'] before:mr-[10px]"
                  key={idx}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            ref={magnifiedRef}
            className={`magnified-img absolute w-full h-full transition-all border-2 border-orange-600 duration-500  opacity-0 scale-50 bg-[#ff980030]  ${
              active && "opacity-100 scale-100"
            }`}
          ></div>
        </section>
      </div>
    </div>
  );
};

export default Test;
