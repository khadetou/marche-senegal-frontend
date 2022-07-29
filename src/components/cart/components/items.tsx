import React, { FC } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import Produit from "/public/images/produit.jpg";
import { useCart } from "react-use-cart";

const Items: FC<{
  setValue?: any;
}> = ({ setValue }) => {
  const { items, updateItemQuantity, removeItem, cartTotal } = useCart();

  return (
    <div className="w-full h-full flex flex-col justify-between ">
      <Scrollbars autoHide>
        <ul>
          {items.map(({ image, name, price, id, quantity }, idx) => (
            <li
              key={id}
              className="flex justify-between group relative items-center mr-5"
            >
              <div
                className="absolute right-0 top-0 invisible transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 group-hover:visible cursor-pointer"
                onClick={() => removeItem(id)}
              >
                <IoIosClose className="text-red-500" />
              </div>

              <div className=" w-[100px] h-[100px]">
                <Image
                  src={image[0].url}
                  alt="Images preview"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-light-gray text-sm mb-2">{name}</p>
                <div className="rounded-full border flex items-center justify-center border-light-gray">
                  <span
                    className="border-r px-2 border-light-gray cursor-pointer"
                    onClick={() => updateItemQuantity(id, quantity! - 1)}
                  >
                    -
                  </span>
                  <input
                    className="w-14 text-light-gray text-center p-0 text-[14px] focus:ring-0 border-0"
                    type="number"
                    step={1}
                    min={1}
                    value={quantity}
                  />
                  <span
                    className="border-l px-2 border-light-gray cursor-pointer"
                    onClick={() => updateItemQuantity(id, quantity! + 1)}
                  >
                    +
                  </span>
                </div>
              </div>
              <h3 className="text-light-gray text-[14px]">{price} FCFA</h3>
            </li>
          ))}
        </ul>
      </Scrollbars>
      <div className="border-t-[0.5px] w-full flex flex-col border-light-gray">
        <div className="flex justify-between items-center text-[14px] font-bold h-[4px] mt-6">
          <h3 className="text-dark-gray">SOUS - TOTAL:</h3>
          <h3 className="text-primary">{cartTotal.toFixed(2)} FCFA</h3>
        </div>
        <div>
          <p className="text-primary text-[14px] uppercase text-center font-semibold mt-3">
            Voire panier
          </p>
        </div>
        <button className="text-white text-[14px] font-bold bg-primary rounded-full py-3 mt-3 transition-all ease-in duration-300 hover:bg-secondary">
          Valider
        </button>
      </div>
    </div>
  );
};

export default Items;
