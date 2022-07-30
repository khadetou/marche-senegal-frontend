import React, { useState, useEffect, FC } from "react";
import StarsRating from "react-star-rate";
import ImageGallery from "react-image-gallery";
import { HiStar } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/index";
import { getProductById } from "store/reducers/products/productSlice";
import Link from "next/link";
import { useCart } from "react-use-cart";

const ProductDetail: FC<{ open: any; setOpen: any }> = ({ open, setOpen }) => {
  const [value, setValue] = useState<number | undefined>(0);
  const [qty, setQty] = useState(1);
  const isLaptop = useMediaQuery({ query: "(min-width:640px)" });

  const {
    query: { id },
  } = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id as string));
    }
  }, [dispatch, id]);

  const { product } = useAppSelector((state) => state.products);

  let array: any[] = [];

  if (product) {
    array = product.image.map((item: any) => {
      return {
        original: item.url,
        thumbnail: item.url,
      };
    });
  }

  const { addItem } = useCart();

  return (
    <section className="h-full">
      <div className="containers">
        <div className="flex w-ful flex-end">
          <Link href="/">
            <button className="py-4 px-14 bg-primary mb-6 mt-8 text-sm font-medium hover:bg-secondary text-white rounded-full">
              Retourner
            </button>
          </Link>
        </div>
        <div className="flex flex-col  md:flex-row items-center pb-20 h-[60%] pt-20">
          <div className="max-w-[602px] mr-4 w-full mb-12 md:mb-0">
            {product && array && (
              <ImageGallery
                items={array}
                additionalClass="product-items group"
                useBrowserFullscreen={isLaptop}
              />
            )}
          </div>
          <div className="relative">
            <h2 className="text-2xl font-medium mb-[10px] text-[#2b2b2b]">
              {product && product.name}
            </h2>
            <h3 className="text-[28px] font-normal text-[#8f8f8f] mb-[18px]">
              {product && product.price} FCFA
            </h3>
            <div className="flex text-[0px] mb-[14px] items-center">
              <StarsRating
                value={4.5}
                disabled
                symbol={<HiStar size="25px" />}
                classNamePrefix="stars"
              />
              <p className="text-[14px] text-[#8f8f8f] ml-8">
                ({product && product.Reviews} customer review)
              </p>
            </div>
            <div className="py-[35px]">
              <p className="text-sm text-[#8f8f8f] py-9">
                {product && product.description}
              </p>
            </div>
            <div className="flex">
              <div className="rounded-full border flex items-center justify-center border-light-gray">
                <span
                  className=" px-5  cursor-pointer"
                  onClick={() => {
                    if (qty > 0) {
                      setQty(qty - 1);
                    }
                  }}
                >
                  -
                </span>
                <input
                  className="w-[70px] py-3 px-0 text-light-gray focus:ring-0 border-none text-center text-[14px]"
                  type="number"
                  step={1}
                  min={1}
                  value={qty}
                  onChange={(e: any) => setQty(e.target.value)}
                />
                <span
                  className=" px-5 cursor-pointer"
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </span>
              </div>
              <button
                className="ml-2 text-white bg-primary text-sm font-bold rounded-full px-4"
                onClick={() => {
                  addItem({ ...product, id: product._id }, qty);
                  setOpen(true);
                }}
              >
                AJOUTER AU PANIER
              </button>
            </div>
            <p className="text-sm text-[#8f8f8f] mt-5">
              Catégorie:{" "}
              <span className="text-[#2b2b2b]">
                {product && product.category}
              </span>
            </p>
          </div>
        </div>
        <div className="pt-[54px] pb-[50px]">
          <div>
            <h1 className="text-lg py-[15px] text-[#2b2b2b]">Description</h1>
            <p className="textb-base text-[#8f8f8f]">
              Qui qui possimus optio quo enim assumenda aut qui. Consequatur
              temporibus quidem adipisci at in. Vitae et perferendis magni ut.
              Est a explicabo consectetur ea. Corporis voluptatibus perspiciatis
              assumenda. Voluptas delectus accusantium facere consequatur quo
              quas. Laboriosam aspernatur laborum quisquam hic voluptas amet.
            </p>
          </div>
          <div>
            <h1 className="text-lg py-[15px] text-[#2b2b2b]">Reviews (1)</h1>
            <div className="py-8 border-b  flex px-0 sm:px-24 ">
              <h1 className="bg-[#2b2b2b] rounded-full text-base font-bold text-white p-4 max-w-[56px] max-h-[56px]">
                KD
              </h1>
              <div className="ml-5 px-0 sm:px-3">
                <h1 className="text-sm font-semibold text-[#2b2b2b]  ">
                  Khadetetou D.
                </h1>
                <div>
                  <div className="flex items-center -ml-1 my-4">
                    <StarsRating
                      value={4.5}
                      disabled
                      symbol={<HiStar size="25px" />}
                      classNamePrefix="stars"
                    />
                    <p className="text-xs text-[#8b8b8b] text-normal ml-4">
                      5 months
                    </p>
                  </div>
                  <p className="text-sm text-[#8b8b8b] leading-[1.5] max-w-full  sm:max-w-[70%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa officia atque at modi accusantium explicabo voluptatum
                    tempora deserunt consectetur autem quod aliquid mollitia
                    earum, vitae cupiditate a ratione inventore repudiandae
                    perspiciatis est error eos cum nisi eveniet? Corporis
                    veritatis, tempora est quia sunt quidem doloribus iste.
                    Delectus est aliquam repudiandae.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg py-[15px] text-[#2b2b2b]">
                Give a review
              </h2>
              <div className="my-3 -ml-2">
                <StarsRating
                  value={value}
                  onChange={(e) => setValue(e)}
                  symbol={<HiStar size="35px" />}
                  classNamePrefix="stars"
                />
              </div>
              <form>
                <div className="flex flex-col">
                  <label
                    htmlFor="review"
                    className="text-sm text-[#8b8b8b] py-2"
                  >
                    Commentaire
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    cols={30}
                    rows={10}
                    className="border-gray-300 border-[0.1px] focus:ring-1
                  focus:ring-gray-200 focus:border-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="text-white text-sm font-bold bg-primary rounded-full mt-6 py-3 max-w-[170px]"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
