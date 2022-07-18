import { FaBars } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { FC, useState } from "react";
import Drawer from "./drawer";
import Scrollbars from "react-custom-scrollbars-2";
import Produit from "/public/images/produit.jpg";
import Image from "next/image";
import Empty from "../components/empty";
import Items from "../components/items";

const Cartdrawer: FC<{ open: boolean; setOpen: any }> = ({ open, setOpen }) => {
  const [value, setValue] = useState<number>(1);

  const addValue = () => {
    let val = value + 1;
    setValue(val);
  };

  const substract = () => {
    if (value > 1) {
      let val = value - 1;
      setValue(val);
    }
  };

  return (
    <Drawer
      drawerHandler={
        <div className="flex items-center justify-center shrink-0 w-[26px]">
          <FaBars size="26px" color="#000" />
        </div>
      }
      open={open}
      placement="right"
      toggleHandler={() => setOpen(!open)}
      closeButton={<VscClose size="26px" color="#8f8f8f" />}
      drawerStyle="w-full h-full"
      closeBtnStyle="flex items-center justify-center top-[25px] right-[30px] absolute z-10 cursor-pointer"
    >
      <div className="w-full h-full flex flex-col  pt-[30px] pb-[40px] px-[30px]">
        <Empty />
        {/* <Items
          value={value}
          addValue={addValue}
          substract={substract}
          setValue={setValue}
        /> */}
      </div>
    </Drawer>
  );
};

export default Cartdrawer;
