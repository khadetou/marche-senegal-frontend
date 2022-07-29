import { FaBars } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import { FC, useState } from "react";
import Drawer from "./drawer";
import Empty from "../components/empty";
import Items from "../components/items";
import { useCart } from "react-use-cart";

const Cartdrawer: FC<{ open: any; setOpen: any }> = ({ open, setOpen }) => {
  const [value, setValue] = useState<number>(1);

  const { items } = useCart();
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
        {items.length > 0 ? <Items /> : <Empty />}
      </div>
    </Drawer>
  );
};

export default Cartdrawer;
