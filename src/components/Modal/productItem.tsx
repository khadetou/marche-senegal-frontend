import { Dispatch, FC, useRef } from "react";
import { HiStar } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import StarsRating from "react-star-rate";
import Modal from "./modal";
import ImageGallery from "react-image-gallery";

const product = [
  {
    original:
      "https://res.cloudinary.com/didh3wbru/image/upload/v1658244260/Ecommerce/Images/Products/product-14_oaysxe.jpg",
    thumbnail:
      "https://res.cloudinary.com/didh3wbru/image/upload/v1658244260/Ecommerce/Images/Products/product-14_oaysxe.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/didh3wbru/image/upload/v1658328125/Ecommerce/Images/Products/product-14-2_mn4tmo.jpg",
    thumbnail:
      "https://res.cloudinary.com/didh3wbru/image/upload/v1658328125/Ecommerce/Images/Products/product-14-2_mn4tmo.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/didh3wbru/image/upload/v1658328131/Ecommerce/Images/Products/product-14-1_epzytk.jpg",
    thumbnail:
      "https://res.cloudinary.com/didh3wbru/image/upload/v1658328131/Ecommerce/Images/Products/product-14-1_epzytk.jpg",
  },
];

interface ModalsProps {
  openModal: boolean;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
}
const ProductItem: FC<ModalsProps> = ({ openModal, setOpenModal }) => {
  const modalRef = useRef<any>();
  return (
    <>
      <Modal openModal={openModal} setOpenModal={setOpenModal} ref={modalRef}>
        <div className="flex flex-col  md:flex-row items-center relative h-full w-full ">
          <IoIosClose
            className="absolute right-0 top-0 cursor-pointer text-red-600 text-[25px] transition-all ease-linear duration-300 hover:rotate-90"
            onClick={() => setOpenModal(false)}
          />
          <div className="w-[50%]  mb-12 md:mb-0">
            <ImageGallery
              items={product}
              additionalClass="product-items group"
              showFullscreenButton={false}
              // useBrowserFullscreen={isLaptop}
            />
          </div>
          <div className="relative w-1/2 p-[10px]">
            <h2 className="text-2xl font-medium mb-[10px] text-[#2b2b2b]">
              Apple Fruit
            </h2>
            <h3 className="text-[28px] font-normal text-[#8f8f8f] mb-[18px]">
              $50.00
            </h3>
            <div className="flex text-[0px] mb-[14px] items-center">
              <StarsRating
                value={4.5}
                disabled
                symbol={<HiStar size="25px" />}
                classNamePrefix="stars"
              />
              <p className="text-[14px] text-[#8f8f8f] ml-8">
                (1 customer review)
              </p>
            </div>
            <div className="py-[15px]">
              <p className="text-sm text-[#8f8f8f] py-9">
                Ipsa consequatur dolore labore eos et tempore et. Ab inventore
                rerum eligendi ipsam alias. Minus quia quo qui amet in.
              </p>
            </div>
            <div className="flex">
              <div className="rounded-full border flex items-center justify-center border-light-gray">
                <span
                  className=" px-5  cursor-pointer"
                  // onClick={substract}
                >
                  -
                </span>
                <input
                  className="w-[70px] py-3 px-0 text-light-gray focus:ring-0 border-none text-center text-[14px]"
                  type="number"
                  step={1}
                  min={1}
                  // value={qty}
                  // onChange={(e: any) => setQty(e.target.value)}
                />
                <span
                  className=" px-5 cursor-pointer"
                  // onClick={addValue}
                >
                  +
                </span>
              </div>
              <button className="ml-2 text-white bg-primary text-sm font-bold rounded-full px-4">
                AJOUTER AU PANIER
              </button>
            </div>
            <p className="text-sm text-[#8f8f8f] mt-5">
              Catégorie: <span className="text-[#2b2b2b]">Fruit</span>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductItem;
