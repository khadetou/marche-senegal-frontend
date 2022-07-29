import React, { FC, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaOpencart } from "react-icons/fa";
import Image from "next/image";
import Produit from "/public/images/produit.jpg";

const CartItems: FC<{ open: any; setOpen: any }> = ({ open, setOpen }) => {
  const [value, setValue] = useState(1);
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <section className="w-full h-full flex flex-col justify-between mb-28 ">
      <div className="containers">
        {!isEmpty ? (
          <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center lg:justify-between">
            <div className="w-full flex flex-col items-center">
              <ul className="max-w-[760px] w-full flex justify-between flex-row lg:flex-col mb-4 lg:mb-0">
                <div className="flex lg:hidden items-center">
                  <Image src={Produit} width={75} height={75} />
                </div>
                <li className="lg:border-b-[0.1px] py-2 lg:py-8 flex flex-col lg:flex-row justify-between px-0 mr-2 lg:mr-0 lg:px-8 border-gray-300  h-[200px] lg:h-[inherit]">
                  <h1 className="text-[14px] font-bold text-dark-gray">
                    Produit
                  </h1>
                  <h1 className="text-[14px] font-bold text-dark-gray ml-0 lg:ml-20">
                    Prix
                  </h1>
                  <h1 className="text-[14px] font-bold text-dark-gray">
                    Quantité
                  </h1>
                  <h1 className="text-[14px] font-bold text-dark-gray">
                    Total
                  </h1>
                </li>
                <li className="flex flex-col lg:flex-row  justify-between group lg:border-b-[0.1px] border-gray-300 relative py-2 lg:py-12 items-center mr-5">
                  <div className="flex items-center justify-between flex-row-reverse lg:flex-row ">
                    <div className="  transition-all duration-300 ease-out cursor-pointer mr-0 lg:mr-5">
                      <IoIosClose
                        size="25px"
                        className="text-[#8f8f8f] hover:text-red-600"
                      />
                    </div>

                    <div className="hidden lg:flex items-center">
                      <Image src={Produit} width={75} height={75} />
                    </div>

                    <p className="text-gray-400 lg:text-dark-gray lg:font-bold ml-0 lg:ml-[30px] text-sm mr-8 lg:mr-0">
                      Onion
                    </p>
                  </div>
                  <h3 className="text-light-gray text-[14px]">$75.00</h3>
                  <div className="flex flex-col justify-center">
                    <div className="rounded-full w-[120px] border py-0 lg:py-3  flex items-center justify-center border-gray-200">
                      <span
                        className=" px-2 text-gray-400 border-light-gray cursor-pointer"
                        // onClick={substract}
                      >
                        -
                      </span>
                      <input
                        className="w-14 p-0 text-light-gray text-center border-0 text-[14px]"
                        type="number"
                        step={1}
                        min={1}
                        value={value}
                        onChange={(e: any) => setValue(e.target.value)}
                      />
                      <span
                        className=" px-2 text-gray-400 border-light-gray cursor-pointer"
                        // onClick={addValue}
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <h3 className="text-primary font-bold text-[14px]">$75.00</h3>
                </li>
              </ul>
              <button className="text-white text-[14px] self-center w-full max-w-[300px] font-bold bg-primary rounded-full py-3 mt-3 transition-all ease-in duration-300 hover:bg-secondary">
                Update cart
              </button>
            </div>
            <div className="max-w-[369px] mt-5 lg:mt-0 w-full h-[284px] border border-gray-300 px-[20px] py-[20px] flex flex-col">
              <h1 className="text-[24px] font-normal text-dark-gray my-[15px]">
                Cart totals
              </h1>
              <div className="border-b  flex items-center justify-between">
                <h1 className="text-dark-gray font-bold text-sm py-[10px]">
                  Subtotal
                </h1>
                <p className="text-primary py-[10px] text-sm font-normal">
                  $250.00
                </p>
              </div>
              <div className=" flex items-center justify-between">
                <h1 className="text-dark-gray font-semibold text-sm pb-[10px] pt-[20px]">
                  Total
                </h1>
                <h1 className="text-primary text-sm font-semibold pb-[10px] pt-[20px]">
                  $250.00
                </h1>
              </div>
              <button className="text-white text-sm font-semibold rounded-full mt-5 py-4 bg-primary hover:bg-secondary">
                PASSER A LA CAISSE
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-white mb-1 flex items-center bg-primary p-3 w-full">
              <FaOpencart className="mr-4" /> <p>Votre panier est vide</p>
            </div>
            <button className="text-white rounded-full bg-primary px-14 py-3 mt-9 hover:bg-secondary">
              Retourner
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartItems;
