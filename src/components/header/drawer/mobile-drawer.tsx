import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";
import Drawer from "./drawer";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import Scrollbars from "react-custom-scrollbars-2";

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);

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
  return (
    <Drawer
      width="320px"
      drawerHandler={
        <div className="flex items-center mr-4 justify-center shrink-0 w-[26px] lg:hidden">
          <AiOutlineBars size="40px" color="#000" />
        </div>
      }
      open={open}
      toggleHandler={() => setOpen(!open)}
      closeButton={<IoCloseOutline size="26px" color="#000" />}
      drawerStyle="w-full h-full"
      closeBtnStyle="flex items-center justify-center top-[25px] right-[30px] absolute z-10 cursor-pointer"
    >
      <Scrollbars autoHide>
        <div className="w-full h-full flex flex-col pt-[100px] pb-[40px] px-[30px]">
          <div className="w-full flex flex-col menu">
            {menues.map(({ title, path }, key) => (
              <Link key={key} href={path}>
                <a className="block text-dark-gray py-2 hover:bg-gray-200 hover:text-secondary">
                  {title}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </Scrollbars>
    </Drawer>
  );
};

export default MobileDrawer;
