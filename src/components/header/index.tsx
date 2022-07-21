import Link from "next/link";
import { FC, useState } from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FiAlignJustify } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiPhone } from "react-icons/hi";
import MobileDrawer from "./drawer/mobile-drawer";
import Image from "next/image";
import Logo from "/public/images/marchelogo.svg";
import { useRouter } from "next/router";
import Cartdrawer from "../cart/drawer/cartdrawer";

interface HeaderProps {
  className?: string;
  bgClassName?: string;
  buttonClassName?: string;
}

interface IconProps {
  className?: string;
  size?: number | string;
}

const Icons: FC<{
  Icon: any;
  className?: string;
  open: boolean;
  setOpen: any;
}> = ({ Icon, className, open, setOpen }) => {
  const toggleCart = () => {
    if (Icon === AiOutlineShoppingCart) {
      setOpen(!open);
    }
  };

  return (
    <>
      <div
        className={`rounded-full p-[13px] bg-primary relative cursor-pointer ${className}`}
        onClick={toggleCart}
      >
        {Icon === AiOutlineShoppingCart && (
          <span className="absolute top-[-20%] right-[-12%] rounded-full bg-secondary py-1 px-2 text-xs">
            3
          </span>
        )}
        <Icon className="text-base text-white" />
      </div>
    </>
  );
};

const Header: FC<HeaderProps> = ({ className, bgClassName }) => {
  const menues = [
    { title: "Accueil", path: "/" },
    { title: "Boutique", path: "/about" },
    {
      title: "Blog",
      path: "/services",
      className: "relative group",
    },
    { title: "Pages", path: "/work" },
    { title: "Nous Contacter", path: "/products" },
  ];
  const [open, setOpen] = useState(false);

  const category = [
    "Fruits & Légumes",
    "Suppléments",
    "Produits laitier & Oeufs",
    "Epices",
    "Poisson",
    "Céréales",
    "Viandes",
  ];
  const { pathname } = useRouter();

  const [rotate, setRotate] = useState(false);

  return (
    <header className="relative h-[188px] bg-white">
      <div
        className={`text-white w-full  absolute z-20 min-w-0 top-0 left-0 transition-all ease-in duration-[0.4s] h-[116px]  ${className}`}
      >
        <div
          className={`w-full bg-header h-full flex-col flex items-center ${bgClassName}`}
        >
          <div className="flex py-5 justify-between items-center relative containers p-[10px]">
            <div className="flex lg:items-center w-[180px] flex-col  lg:w-full lg:justify-between lg:mr-14 lg:flex-row">
              <div className="flex items-center">
                <MobileDrawer />
                <Link passHref href="/">
                  <button className="flex items-center">
                    <Image src={Logo} alt="logo" width={178} />
                  </button>
                </Link>
              </div>
              <div className=" lg:static absolute lg:w-[397px] left-0  w-full top-[100%]  ">
                <div className="h-[50px] w-full max-w-[397px] mx-auto mt-2 lg:mt-0 relative group">
                  <input
                    type="text"
                    onFocus={() => setRotate(true)}
                    onBlur={() => setRotate(false)}
                    className="w-full h-full group focus:ring-1 focus:ring-gray-200 border-0 text-sm py-[1px] pl-5 pr-[50px] h-full-400 bg-gray-100 rounded-full text-gray-600 "
                    placeholder="Search products..."
                  />
                  <button
                    className={`absolute p-4 right-0 bottom-0 top-0 transition-all duration-300 ease-linear group-hover:rotate-[110deg] ${
                      rotate && "rotate-[110deg]"
                    }`}
                  >
                    <BiSearchAlt size="23px" className="text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="hidden md:flex w-[209px] items-center">
                <div className="mr-2">
                  <HiPhone size={30} className="text-secondary" />
                </div>
                <div className="flex-col flex">
                  <h3>
                    <span className="text-black font-medium text-xs">
                      Appelez Nous 24/7
                    </span>
                  </h3>
                  <p className="text-secondary">(+221) 78 600 45 64</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="flex justify-between">
                  {[AiOutlineUser, AiOutlineShoppingCart].map((icons, key) => (
                    <Icons
                      open={open}
                      setOpen={setOpen}
                      Icon={icons}
                      key={key}
                      className="mr-4 last:mr-0"
                    />
                  ))}
                </div>
              </div>
              <Cartdrawer open={open} setOpen={setOpen} />
            </div>
          </div>
          <div className="bg-primary w-full hidden lg:block">
            <div className="flex justify-between items-center containers  relative p-[10px]">
              <div className="text-white font-medium bg-secondary group px-8 py-3 rounded-full flex items-center">
                <FiAlignJustify className="mr-3" /> <p>Categories</p>
                <div className="absolute !w-[245px] rounded-md top-7  bg-white transition-transform ease-linear duration-300 shadow-xl  text-dark   invisible translate-x-3 text-dark-gray translate-y-12 opacity-0  group-hover:visible group-hover:opacity-100 group-hover:translate-y-[35px] group-hover:translate-x-[-30px]">
                  {category.map((item, idx) => (
                    <div key={idx}>
                      <Link passHref href="/orders/design">
                        <a className="!text-base inline-block px-3 w-full py-4 hover:text-secondary hover:bg-gray-100 !font-normal  ">
                          {item}
                        </a>
                      </Link>
                      <hr className="text-light-gray" />
                    </div>
                  ))}
                </div>
              </div>
              <nav className="mx-auto hidden lg:flex nav">
                {menues.map(({ title, path, className }, key) => (
                  <Link passHref key={key} href={path}>
                    <button
                      className={`flex items-center px-1 mx-3 my-1 py-3 xl:px-1 xl:py-3 relative group  font-normal leading-none text-sm  before:contente-[""] before:w-0  hover:before:w-full before:h-[3px] before:transition-all before:left-0 before:bg-secondary before:absolute before:bottom-1  hover:text-secondary before:duration-500 ease-linear ${className} ${
                        pathname.endsWith(path) &&
                        "before:!bg-secondary before:!w-full !text-secondary"
                      }`}
                      type="button"
                    >
                      {title}
                      {title.toLocaleLowerCase() === "boutique" && (
                        <RiArrowDropDownLine
                          size="27"
                          className="group-hover:rotate-180 transition-all ease-in-out duration-300"
                        />
                      )}
                      {title.toLocaleLowerCase() === "pages" && (
                        <RiArrowDropDownLine
                          size="27"
                          className="group-hover:rotate-180 transition-all ease-in-out duration-300"
                        />
                      )}
                      {title.toLocaleLowerCase() === "boutique" && (
                        <div className="absolute !w-[200px] rounded-md top-7  bg-white transition-transform ease-linear duration-100 shadow-lg  text-dark-gray  invisible translate-x-3 translate-y-12 opacity-0  group-hover:visible group-hover:opacity-100 group-hover:translate-y-[21px] group-hover:translate-x-0">
                          <Link passHref href="/orders/design">
                            <a className="!text-[14px] inline-block w-full py-4 hover:text-secondary hover:bg-gray-100 !font-normal ">
                              Panier
                            </a>
                          </Link>

                          <Link passHref href="/orders/web">
                            <a className="!text-[14px] inline-block w-full py-4  hover:text-secondary hover:bg-gray-100 !font-normal ">
                              Paiement
                            </a>
                          </Link>
                        </div>
                      )}
                      {title.toLocaleLowerCase() === "pages" && (
                        <div className="absolute !w-[200px] rounded-md top-7  bg-white transition-transform ease-linear duration-100 shadow-lg  text-dark-gray invisible translate-x-3 translate-y-12 opacity-0  group-hover:visible group-hover:opacity-100 group-hover:translate-y-[21px] group-hover:translate-x-0">
                          <Link passHref href="/orders/design">
                            <a className="!text-[14px] inline-block w-full py-4 hover:text-secondary hover:bg-gray-100 !font-normal">
                              A propos
                            </a>
                          </Link>

                          <Link passHref href="/orders/web">
                            <a className="!text-[14px] inline-block w-full py-4  hover:text-secondary hover:bg-gray-100 !font-normal">
                              Faqs
                            </a>
                          </Link>
                        </div>
                      )}
                    </button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
